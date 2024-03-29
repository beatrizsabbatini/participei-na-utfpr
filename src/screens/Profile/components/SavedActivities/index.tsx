import React from 'react';

import { ActivityIndicator, ListRenderItem, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

import SavedActivity from '../../../../components/SavedActivity';
import { HomeStackParamList } from '../../../../routes/app.routes';
import { useNavigation } from '@react-navigation/core';
import { IActivity } from '../../../../types';
import theme from '../../../../global/styles/theme';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { Container, InstructionsText, Row, LoadingContainer } from './styles';
import EmptyMessage from '../../../../components/EmptyMessage';
import { ShadowDivider } from '../../styles';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const SavedActivities: React.FC = () => {
  const { loading, data } = useSelector((state: IState) => state.loggedUserSavedActivities);
  const { data: userData } =  useSelector((state: IState) => state.userData);

  const { navigate } = useNavigation<HomeScreenProp>();

  const renderActivities: ListRenderItem<IActivity> = ({ item }) => {
    const savedActivities = userData.savedActivities || [];
    // const activityFound = savedActivities?.find(activity => activity.id === item.id && activity.certificate);
    const activityFound = savedActivities?.find(activity => activity.id === item.id && activity.participated);
    let dataUpdated = item;

    if (activityFound) {
      dataUpdated = {
        ...item, 
        participated: !!activityFound.participated,
      };
    }
    return (
    <SavedActivity data={dataUpdated} onPress={() => navigate('ActivityDetails', { data: item })}/>
  );}

  return (
    <Container>
      {!loading && data ? (
        <>
          <Row>
            <MaterialIcons name="info" size={24} color={theme.colors.primary} />
            <InstructionsText>
                Suas atividades salvas serão mostradas na aba de estatísticas assim que você 
                marcá-las como participação concluída.
            </InstructionsText>
          </Row>
          <ShadowDivider/>
          <>
          {data.length === 0 ? 
            <EmptyMessage text="Oops, você ainda não salvou nenhuma atividade"/> : 
            <FlatList 
              renderItem={renderActivities}
              data={data} 
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
            }
          </>
        </>
      ) : (
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </LoadingContainer>
      )}
     
    </Container>
  )
}

export default SavedActivities;