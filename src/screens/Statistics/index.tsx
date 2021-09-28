import React from 'react';

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
import { groupsData, totalPointsData } from '../../mock/activitiesMock';

interface ChartProps {
  x?: any;
  y?: any;
  minimalValue: number;
  horizontalChart?: boolean
}

const Statistics: React.FC = () => {

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
      <Row>
        <Badge group={1}/>
        <Badge group={2}/>
        <Badge group={3}/>
      </Row>
      <Row>
        {
          groupsData.map(bar => (
            <StackedBarChart
              style={{ height: bar.height, width: RFValue(60), marginHorizontal: RFValue(10) }}
              keys={['pointsAchieved', 'pointsAvailable']}
              colors={bar.colors}
              data={bar.points}
              contentInset={{ top: 30 }}
            >
              <HorizontalLine minimalValue={bar.minimalValue}/>
            </StackedBarChart>
          ))
        }
      </Row>
      <XAxis
        data={['1-20 pontos', '2-10 pontos', '3-20 pontos']}
        scale={scale.scaleBand}
        xAccessor={({item}) => item}
        formatLabel={(item) => item.split('-')[1]}
        style={{ marginTop: 20 }}
        svg={{ fontSize: 12, fontWeight: 'bold', fill: '#ABABAB'}}
      />

      <InstructionsContainer>
        <Row alignItems="center">
          <RedLine/>
          <Instructions>Mínimo de pontos que se deve atingir em cada grupo.</Instructions>
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
        data={totalPointsData}
      >
        <HorizontalLine minimalValue={70} horizontalChart/>
      </StackedBarChart>

      <Row alignItems="center" paddingTop>
        <BlueLine/>
        <Instructions>Linha vermelha: Mínimo de pontos que se deve atingir em cada grupo.</Instructions>
      </Row>

    </Background>
  )
}

export default Statistics;