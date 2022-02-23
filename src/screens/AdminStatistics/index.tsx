import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg'
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { Description, MainContainer, NumberText, Row, Title } from './styles';
import Badge from '../../components/Badge';

// import { Container } from './styles';

interface ChartProps {
  x?: any;
  y?: any;
  minimalValue: number;
  horizontalChart?: boolean
}

const AdminStatistics: React.FC = () => {
  const { loading, data: activitiesData } = useSelector((state: IState) => state.activities);
  const [group1NumberOfActivities, setGroup1Activities] = useState<number>(0);
  const [group2NumberOfActivities, setGroup2Activities] = useState<number>(0);
  const [group3NumberOfActivities, setGroup3Activities] = useState<number>(0);

  useEffect(() => {
    if (activitiesData?.length > 0){

      let countGroup1 = 0;
      let countGroup2 = 0;
      let countGroup3 = 0;

      activitiesData.map(item => {
        if (item.category.group === 1) countGroup1 += 1;
        if (item.category.group === 2) countGroup2 += 1;
        if (item.category.group === 3) countGroup3 += 1;
      })

      setGroup1Activities(countGroup1);
      setGroup2Activities(countGroup2);
      setGroup3Activities(countGroup3);
    }
  }, [activitiesData])
  

  const data = [
    {
        key: 1,
        amount: group1NumberOfActivities,
        svg: { fill: '#2DB3F0' },
    },
    {
        key: 2,
        amount: group2NumberOfActivities,
        svg: { fill: '#63E27F' }
    },
    {
        key: 3,
        amount: group3NumberOfActivities,
        svg: { fill: '#FBCF7B' }
    },
]

const Labels = ({ slices, height, width }: any) => {
  return slices.map((slice: any, index: number) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
          <Text
            key={index}
            x={pieCentroid[ 0 ]}
            y={pieCentroid[ 1 ]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={24}
          >
            {data.amount !== 0 ? data.amount : ''}
          </Text>
      )
  })
}

  return (
    <MainContainer>
      <Title>
        N° de atividades publicadas: 
        <NumberText> {activitiesData.length}</NumberText>
      </Title>
      <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        outerRadius={'95%'}
      >
        <Labels/>
      </PieChart>
      <Row>
        <Badge group={1}/>
        <Badge group={2}/>
        <Badge group={3}/>
      </Row>
      <Description>
        Com esses dados você pode analisar quais são os grupos predominantes nas atividades publicadas. Podendo assim ajudar a universidade a proporcionar mais atividades para o/os grupos em menor abundância.
      </Description>
    </MainContainer>
  )
}

export default AdminStatistics;