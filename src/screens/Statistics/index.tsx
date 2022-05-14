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
  BlueLine,
  ModalTitle,
  ModalText,
  ModalBox
} from './styles';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import AdminStatistics from '../AdminStatistics';
import Modal from "react-native-modal";
import { useStatisticsModal } from '../../hooks/StatisticsModal';
import { adminHelpText, helpText } from '../../constants/statistics';


interface ChartProps {
  x?: any;
  y?: any;
  minimalValue: number;
  horizontalChart?: boolean
}

const Statistics: React.FC = () => {

  const { data } = useSelector((state: IState) => state.userData);
  const { data: activitiesData } = useSelector((state: IState) => state.activities);
  const [totalPoints, setTotalPoints] = useState<any>({group1: 0, group2: 0, group3: 0, availablePoints: 100});
  const [groupsData, setGroupsData] = useState<any[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const { modalVisible, setModalVisible } = useStatisticsModal();

  useEffect(() => {
    if (activitiesData){
      const activitiesWithCertificate = data.savedActivities.filter(activity => activity.certificate);
      const activitiesIds = activitiesWithCertificate.map(item => item.id);
      const activitiesWithPoints = activitiesData.filter(activity => activitiesIds.includes(activity.id));
  
      const sum3groups = activitiesWithPoints.reduce(function (acc, obj: any) { return acc + obj.category.points }, 0);
  
      const activitiesGroup1 = activitiesWithPoints.filter(item => item.category.group === 1);
      const activitiesGroup2 = activitiesWithPoints.filter(item => item.category.group === 2);
      const activitiesGroup3 = activitiesWithPoints.filter(item => item.category.group === 3);
  
      const sumGroup1 = activitiesGroup1.reduce(function (acc, obj: any) { return acc + obj.category.points }, 0);
      const sumGroup2 = activitiesGroup2.reduce(function (acc, obj: any) { return acc + obj.category.points }, 0);
      const sumGroup3 = activitiesGroup3.reduce(function (acc, obj: any) { return acc + obj.category.points }, 0);
  
      const pointsObject = {
        group1: sumGroup1,
        group2: sumGroup2,
        group3: sumGroup3,
        availablePoints: 100 - sum3groups
      }
  
      setTotalPoints(pointsObject);
  
      const groupsPoints = [
        {
          points: [
            {
              pointsAvailable: 30 - sumGroup1,
              pointsAchieved: sumGroup1,
            }
          ],
          colors: ['#2DB3F0', '#EFEFEF'],
          height: RFValue(160),
          minimalValue: 20,
          maximumValue: 30,
        },
        {
          points: [
            {
              pointsAvailable: 30 - sumGroup2,
              pointsAchieved: sumGroup2,
            }
          ],
          colors: ['#63E27F', '#EFEFEF'],
          height: RFValue(160),
          minimalValue: 20,
          maximumValue: 30,
        },
        {
          points: [
            {
              pointsAvailable: 40 - sumGroup3,
              pointsAchieved: sumGroup3,
            }
          ],
          colors: ['#FBCF7B', '#EFEFEF'],
          height: RFValue(203.5),
          minimalValue: 20,
          maximumValue: 40,
        },
      ]
  
      setGroupsData(groupsPoints);
  
      const generateLabels = [`1-${sumGroup1} pontos`, `2-${sumGroup2} pontos`, `3-${sumGroup3} pontos` ];
      setLabels(generateLabels);
    }
   
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
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
                  <View style={{justifyContent: 'space-between'}}>
                    <Text>{bar.maximumValue}</Text>
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
            style={{ marginTop: 20, marginLeft: 18 }}
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

          <Modal
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
          >
            <ModalBox>
              <ModalTitle>Sobre os dados mostrados: </ModalTitle>
              <ModalText>{helpText}</ModalText>
            </ModalBox>
          </Modal>
        </>
      )}

    </Background>
  )
}

export default Statistics;