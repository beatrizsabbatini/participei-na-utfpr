import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import * as scale from 'd3-scale'
import { StackedBarChart, XAxis } from 'react-native-svg-charts';
import { RFValue } from 'react-native-responsive-fontsize';
import { Line } from 'react-native-svg'

import Badge from '../../components/Badge';
import { 
  Background, 
  Instructions, 
  InstructionsContainer, 
  RedLine, 
  Row,
  GrayRectangle,
  BlueLine
} from './styles';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import AdminStatistics from '../AdminStatistics';


interface ChartProps {
  x?: any;
  y?: any;
  minimalValue: number;
  horizontalChart?: boolean
}

const Statistics: React.FC = () => {

  const { data } = useSelector((state: IState) => state.userData);
  const [totalPoints, setTotalPoints] = useState<any>({group1: 0, group2: 0, group3: 0, availablePoints: 100});
  const [groupsData, setGroupsData] = useState<any[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const sum3groups = data.group1Points + data.group2Points + data.group3Points;

    const pointsObject = {
      group1: data.group1Points,
      group2: data.group2Points,
      group3: data.group3Points,
      availablePoints: 100 - sum3groups
    }

    setTotalPoints(pointsObject);

    const groupsPoints = [
      {
        points: [
          {
            pointsAvailable: 30 - data.group1Points,
            pointsAchieved: data.group1Points,
          }
        ],
        colors: ['#2DB3F0', '#EFEFEF'],
        height: RFValue(160),
        minimalValue: 20
      },
      {
        points: [
          {
            pointsAvailable: 30 - data.group2Points,
            pointsAchieved: data.group2Points,
          }
        ],
        colors: ['#63E27F', '#EFEFEF'],
        height: RFValue(160),
        minimalValue: 20
      },
      {
        points: [
          {
            pointsAvailable: 40 - data.group3Points,
            pointsAchieved: data.group3Points,
          }
        ],
        colors: ['#FBCF7B', '#EFEFEF'],
        height: RFValue(203.5),
        minimalValue: 20
      },
    ]

    setGroupsData(groupsPoints);

    const generateLabels = [`1-${data.group1Points} pontos`, `2-${data.group2Points} pontos`, `3-${data.group3Points} pontos` ];
    setLabels(generateLabels);
  }, [data])

  const HorizontalLine = ({ y, x, minimalValue, horizontalChart }: ChartProps) => {

    if (horizontalChart){
      return (
        <Line
          x1={x(minimalValue)}
          x2={x(minimalValue)}
          y1="0%"
          y2="100%"
          stroke="#407bd4"
          strokeWidth={1.8}
        />
      );
    }
 
    return (
      <Line
        y1={y(minimalValue)}
        y2={y(minimalValue)}
        x1="0%"
        x2="100%"
        stroke="#f34e4e"
        strokeWidth={1.8}
      />
    );
  }

  return (
    <Background 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}
    >
      {data.admin ? (
        <AdminStatistics/>
      ) : (
        <>
          <Row>
            <Badge group={1}/>
            <Badge group={2}/>
            <Badge group={3}/>
          </Row>
          <Row>
            {
              groupsData.map(bar => (
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{justifyContent: 'space-between'}}>
                    <Text>20</Text>
                    <Text>0</Text>
                  </View>
                  <View>
                    <StackedBarChart
                      style={{ height: bar.height, width: RFValue(50), marginHorizontal: RFValue(0) }}
                      keys={['pointsAchieved', 'pointsAvailable']}
                      colors={bar.colors}
                      data={bar.points}
                      contentInset={{ top: 10 }}
                    >
                      <HorizontalLine minimalValue={bar.minimalValue}/>
                    </StackedBarChart>
                  </View>
                </View>
              ))
            }
          </Row>
          <XAxis
            data={labels}
            scale={scale.scaleBand}
            xAccessor={({item}) => item}
            formatLabel={(item) => item.split('-')[1]}
            style={{ marginTop: 20 }}
            svg={{ fontSize: 12, fontWeight: 'bold', fill: '#ABABAB'}}
          />

          <InstructionsContainer>
            <Row alignItems="center">
              <RedLine/>
              <Instructions>Mínimo de pontos que se deve atingir em cada grupo (20 pontos).</Instructions>
            </Row>
            <Row alignItems="center" paddingTop>
              <GrayRectangle/>
              <Instructions>Espaço faltante de pontos para atingir o máximo permitido em cada grupo.</Instructions>
            </Row>
          </InstructionsContainer>

          <StackedBarChart
            horizontal
            style={{ height: 35, width: '85%', alignSelf: 'center' }}
            keys={['group1', 'group2', 'group3', 'availablePoints']}
            colors={["#2DB3F0", "#63E27F", "#FBCF7B", "#EFEFEF"]}
            data={[totalPoints]}
          >
            <HorizontalLine minimalValue={70} horizontalChart/>
          </StackedBarChart>

          <Row alignItems="center" paddingTop>
            <BlueLine/>
            <Instructions>Mínimo de pontos que os alunos devem atingir para poderem se formar (70 pontos).</Instructions>
          </Row>
        </>
      )}

    </Background>
  )
}

export default Statistics;