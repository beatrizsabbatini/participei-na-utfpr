import React from 'react';

import * as scale from 'd3-scale'
import { StackedBarChart, XAxis } from 'react-native-svg-charts';
import { Line } from 'react-native-svg'

import Badge from '../../components/Badge';
import { Background, Row } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface ChartProps {
  x?: any;
  y?: any;
  minimalValue: number
}

const Statistics: React.FC = () => {

  const data = [
    {
      points: [
        {
          pointsAvailable: 10,
          pointsAchieved: 20,
        }
      ],
      colors: ['#2DB3F0', '#EFEFEF'],
      height: 160,
      minimalValue: 20
    },
    {
      points: [
        {
          pointsAvailable: 20,
          pointsAchieved: 10,
        }
      ],
      colors: ['#63E27F', '#EFEFEF'],
      height: 160,
      minimalValue: 20
    },
    {
      points: [
        {
          pointsAvailable: 20,
          pointsAchieved: 20,
        }
      ],
      colors: ['#FBCF7B', '#EFEFEF'],
      height: 202,
      minimalValue: 20
    },
  ]

  const HorizontalLine = ({ y, x, minimalValue }: ChartProps) => {
 
    return (
      <Line
        y1={y(minimalValue)}
        y2={y(minimalValue)}
        x1="0%"
        x2="100%"
        stroke="#f34e4e"
        strokeWidth={1.5}
      />
    );
  }

  return (
    <Background>
      <Row>
        <Badge group={1}/>
        <Badge group={2}/>
        <Badge group={3}/>
      </Row>
      <Row>
        {
          data.map(bar => (
            <StackedBarChart
              style={{ height: bar.height, width: RFValue(60), marginHorizontal: RFValue(10) }}
              keys={['pointsAchieved', 'pointsAvailable']}
              colors={bar.colors}
              data={bar.points}
              showGrid={false}
              contentInset={{ top: 30 }}
              yAccessor={({ item }) => item.pointsAvailable}
            >
              <HorizontalLine minimalValue={bar.minimalValue}/>
            </StackedBarChart>
          ))
        }
      </Row>
      <XAxis
        data={['1-20 pontos', '2-10 pontos', '3-20 pontos']}
        scale={scale.scaleBand}
        xAccessor={({item, index}) => item}
        formatLabel={(item, index) => item.split('-')[1]}
        style={{ marginTop: 20}}
        svg={{ fontSize: 12, fontWeight: 'bold', fill: '#ABABAB'}}
      />
    </Background>
  )
}

export default Statistics;