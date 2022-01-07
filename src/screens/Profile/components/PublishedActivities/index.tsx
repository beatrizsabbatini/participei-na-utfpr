import React, { useEffect, useState } from 'react';

import { ActivityIndicator, ListRenderItem, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import theme from '../../../../global/styles/theme';
import { HomeStackParamList } from '../../../../routes/app.routes';
import { IActivity } from '../../../../types';
import { IState } from '../../../../store';
import { Container, LoadingContainer } from './styles';
import EmptyMessage from '../../../../components/EmptyMessage';
import Activity from '../../../../components/Activity';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const PublishedActivities: React.FC = () => {
  const { loading, data } = useSelector((state: IState) => state.loggedUserPublishedActivities);
  const { navigate } = useNavigation<HomeScreenProp>();

  const renderActivities: ListRenderItem<IActivity> = ({ item }) => (
    <Activity userPublished data={item} onPress={() => navigate('ActivityDetails', { data: item })}/>
  );

  return (
    <Container>
      {!loading && data ? (
        <>
          {data.length === 0 ? 
          <EmptyMessage text="Oops, você ainda não publicou nenhuma atividade"/> : 
            <FlatList 
              renderItem={renderActivities}
              showsVerticalScrollIndicator={false}
              data={data} 
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
      ) : (
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.colors.primary}/>
        </LoadingContainer>
      )}
     
    </Container>
  )
}

export default PublishedActivities;