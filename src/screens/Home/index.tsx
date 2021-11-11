import React, { useEffect, useRef, useState } from 'react';

import { Alert, Animated, ListRenderItem, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-native-modal";
import firebase from 'firebase';

import Activity from '../../components/Activity';
import theme from '../../global/styles/theme';
import EmptyList from '../../../assets/empty.png';
import { HomeStackParamList } from '../../routes/app.routes';
import { IActivity } from '../../types';
import { getUserDataRequest } from '../../store/modules/userData/actions';
import { getActivitiesRequest } from '../../store/modules/activities/actions';
import { IState } from '../../store';
import { Background, EmptyMessageContainer, EmptyIcon, EmptyMessage } from './styles';
import GroupSelect from '../../components/GroupSelect';
import { useGroupSelect } from '../../hooks/GroupsSelect';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const userUid = firebase.auth().currentUser?.uid;

  const { modalVisible, setModalVisible, groups } = useGroupSelect();
  const { loading, data } = useSelector((state: IState) => state.activities);
  const { navigate } = useNavigation<HomeScreenProp>();
  const dispatch = useDispatch();

  const onGetUserDataError = () => {
    Alert.alert("Erro ao buscar seus dados!");
  }

  useEffect(() => {
    if (userUid) dispatch(getUserDataRequest({ uid: userUid, onError: onGetUserDataError }));
    dispatch(getActivitiesRequest());
  }, [userUid])

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
        <Activity userPublished={item.publisherId === userUid} data={item} onPress={() => navigate('ActivityDetails', { data: item })}/>  
      </Animated.View>
    )
  };

  return (
    <Background>
      <Searchbar
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
        onSubmitEditing={() => dispatch(getActivitiesRequest({title: searchQuery, groups}))}
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
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <GroupSelect searchQuery={searchQuery}/>
        </Modal>
    </Background>
  )
}

export default Home;