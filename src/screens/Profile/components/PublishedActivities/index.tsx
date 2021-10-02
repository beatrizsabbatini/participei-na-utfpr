import React from 'react';

import { ListRenderItem, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import Activity from '../../../../components/Activity';
import { HomeStackParamList } from '../../../../routes/app.routes';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/core';
import { IActivity } from '../../../../types';
import { publishedActivitiesMock } from '../../../../mock/activitiesMock';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const PublishedActivities: React.FC = () => {

  const { navigate } = useNavigation<HomeScreenProp>();

  const renderActivities: ListRenderItem<IActivity> = ({ item, index }) => (
    <Activity userPublished data={item} onPress={() => navigate('ActivityDetails', { data: item })}/>
  );

  return (
    <Container>
      <FlatList 
        renderItem={renderActivities}
        showsVerticalScrollIndicator={false}
        data={publishedActivitiesMock} 
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

export default PublishedActivities;