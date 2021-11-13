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

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const SavedActivities: React.FC = () => {
  const { loading, data } = useSelector((state: IState) => state.loggedUserSavedActivities);

  const { navigate } = useNavigation<HomeScreenProp>();

  const renderActivities: ListRenderItem<IActivity> = ({ item }) => (
    <SavedActivity data={item} onPress={() => navigate('ActivityDetails', { data: item })}/>
  );

  return (
    <Container>
      {!loading && data ? (
        <>
          <Row>
            <MaterialIcons name="info" size={24} color={theme.colors.primary} />
            <InstructionsText>
                Suas atividades salvas serão contabilizadas (aba de estatísticas) assim que você 
                anexar um certificado/comprovante de participação.
            </InstructionsText>
          </Row>
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