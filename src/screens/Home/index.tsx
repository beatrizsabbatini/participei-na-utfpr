import React, { useEffect, useRef, useState } from 'react';

import { Alert, Animated, ListRenderItem, TouchableOpacityBase, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

import Activity from '../../components/Activity';
import theme from '../../global/styles/theme';
import EmptyList from '../../../assets/empty.png';
import { HomeStackParamList } from '../../routes/app.routes';
import { IActivity } from '../../types';
import { getUserDataError, getUserDataRequest, getUserDataSuccess } from '../../store/modules/userData/actions';
import { getActivitiesRequest } from '../../store/modules/activities/actions';
import { IState } from '../../store';
import { Background, EmptyMessageContainer, EmptyIcon, EmptyMessage } from './styles';
import { getUserData } from './services';
import { IUserData } from '../../store/modules/userData/types';
import Search from '../../components/Search';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  /*const userEmail = firebase.auth().currentUser?.email;
  const usersRef = firebase.database().ref('users');*/

  const { loading, data } = useSelector((state: IState) => state.activities);
  const { navigate } = useNavigation<HomeScreenProp>();
  const dispatch = useDispatch();

  /*async function getUser(){
    if (userEmail){
      dispatch(getUserDataRequest());
      getUserData(usersRef, userEmail, onGetUserDataSuccess, onGetUserDataError);
    }
  }*/

  const onGetUserDataSuccess = (userData: IUserData) => dispatch(getUserDataSuccess(userData));

  const onGetUserDataError = (error: any) => {
    Alert.alert("Erro ao buscar seus dados!", error.message);
    dispatch(getUserDataError(error))
  }

  useEffect(() => {
    //getUser();
    dispatch(getActivitiesRequest());
  }, []) //useEmail

  const scrollY = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = RFValue(132); // height of the activity card (if its wrong, animation will have issues)

  const renderActivities: ListRenderItem<IActivity> = ({ item, index }) => {
    const inputRange = [
      -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0]
    })
    
    return (
      <Animated.View style={{transform: [{scale}]}}>
        <Activity data={item} onPress={() => navigate('ActivityDetails', { data: item })}/>  
      </Animated.View>
    )
  };

  return (
    <Background>
      <Search
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query.toLowerCase())}
        onSubmitEditing={() => dispatch(getActivitiesRequest(searchQuery))}
      />
        {
          loading ? (
            <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: RFValue(50)}}>
              <ActivityIndicator color={theme.colors.primary} size="small"/>
            </View>
          ) : (
            <>
              {data.length > 0 ? (
                <Animated.FlatList 
                  onScroll={Animated.event(
                    [{nativeEvent: { contentOffset: { y: scrollY}}}],
                    { useNativeDriver: true }
                  )}
                  data={data} 
                  keyExtractor={({id}) => id}
                  renderItem={renderActivities}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{height: 2}}
                    />
                  )}
                  style={{width: '100%', paddingTop: RFValue(25)}}
                  contentContainerStyle={{paddingBottom: 30}}
                />
                ) : (
                  <EmptyMessageContainer>
                    <EmptyIcon source={EmptyList}/>
                    <EmptyMessage>Oops, ainda não foram publicadas atividades!</EmptyMessage>
                  </EmptyMessageContainer>
                )
              }
            </>
          )
        }
    </Background>
  )
}

export default Home;