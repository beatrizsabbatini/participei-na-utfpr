import React from 'react';

import { ListRenderItem, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

import SavedActivity from '../../../../components/SavedActivity';
import { HomeStackParamList } from '../../../../routes/app.routes';
import { useNavigation } from '@react-navigation/core';
import { IActivity } from '../../../../types';
import { savedActivitiesMock } from '../../../../mock/activitiesMock';
import { Container, InstructionsText, Row } from './styles';
import theme from '../../../../global/styles/theme';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const SavedActivities: React.FC = () => {

  const { navigate } = useNavigation<HomeScreenProp>();

  const renderActivities: ListRenderItem<IActivity> = ({ item }) => (
    <SavedActivity data={item} onPress={() => navigate('ActivityDetails', { data: item })}/>
  );

  return (
    <Container>
      <Row>
        <MaterialIcons name="info" size={24} color={theme.colors.primary} />
        <InstructionsText>
            Suas atividades salvas serão contabilizadas (aba de estatísticas) assim que você 
            anexar um certificado/comprovante de participação.
        </InstructionsText>
      </Row>
      <FlatList 
        renderItem={renderActivities}
        data={savedActivitiesMock} 
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}) => id}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 2}}
          />
        )}
        style={{width: '100%', paddingTop: RFValue(25)}}
        contentContainerStyle={{paddingBottom: 30}}
      />
    </Container>
  )
}

export default SavedActivities;