import React, { useEffect } from 'react';

import { ActivityIndicator, Alert, FlatList, ListRenderItem, View, Text } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { HomeStackParamList } from '../../routes/app.routes';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, LoadingContainer, Title, ShadowDivider } from './styles';
import { IState } from '../../store';
import { IActivity } from '../../types';
import { getOtherUsersPublishedActivitiesRequest } from '../../store/modules/OtherUsers/publishedActivities/actions';
import ProfileHeader from '../Profile/components/ProfileHeader';
import EmptyMessage from '../../components/EmptyMessage';
import Activity from '../../components/Activity';
import theme from '../../global/styles/theme';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const OtherUsersProfile: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<HomeStackParamList, 'OtherUsersProfile'>>();
  const { activityData } = route.params;
  const { loading: loadingUser, data: userData } = useSelector((state: IState) => state.otherUsersData);
  const { loading, data } = useSelector((state: IState) => state.otherUsersPublishedActivities);
  const { navigate, push } = useNavigation<HomeScreenProp>();

  const onError = () => {
    Alert.alert(`Erro ao buscar as atividades de ${activityData.publisherName}!`);
  }

  useEffect(() => {
    if (userData.publishedActivitiesIds){
      dispatch(getOtherUsersPublishedActivitiesRequest({ ids: userData.publishedActivitiesIds, onError }));
    }
  }, [userData])

  const renderActivities: ListRenderItem<IActivity> = ({ item }) => (
    <Activity userPublished data={item} onPress={() => push('ActivityDetails', { data: item, cameFromUserProfile: true })}/>
  );

  return (
    <>
      <ProfileHeader activityData={activityData} isVisitingOtherProfile/>
      <Container>
      <Title>Atividades publicadas:</Title>
      <ShadowDivider/>
      {!loading && !loadingUser && data ? (
        <>
          {data.length === 0 ? 
          <EmptyMessage text="Oops, este usuário ainda não publicou nenhuma atividade"/> : 
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
    </>
  )
}

export default OtherUsersProfile;