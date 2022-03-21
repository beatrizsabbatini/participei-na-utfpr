import React, { useEffect, useRef, useState } from 'react';

import { Alert, Animated, ListRenderItem, View, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-native-modal";
import Spinner from 'react-native-loading-spinner-overlay';
import firebase from 'firebase';

import Activity from '../../components/Activity';
import theme from '../../global/styles/theme';
import { HomeStackParamList } from '../../routes/app.routes';
import { IActivity } from '../../types';
import { getActivitiesRequest } from '../../store/modules/Activities/getActivities/actions';
import { getUserDataRequest } from '../../store/modules/LoggedUser/userData/actions';
import { IState } from '../../store';
import { Background } from './styles';
import GroupSelect from '../../components/GroupSelect';
import { useGroupSelect } from '../../hooks/GroupsSelect';
import EmptyMessage from '../../components/EmptyMessage';
import ConfirmationModalContent from '../../components/ConfirmationModalContent';
import { editUserRequest } from '../../store/modules/LoggedUser/editUser/actions';
import { useConfirmationModal } from '../../hooks/ConfirmationModal';
import { getCampusesRequest } from '../../store/modules/Campuses/getCampuses/actions';
import { getUserSavedActivitiesRequest } from '../../store/modules/LoggedUser/savedActivities/actions';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [refreshing, setRefreshing] = useState(false);
  const userUid = firebase.auth().currentUser?.uid;
  
  const { push } = useNavigation<HomeScreenProp>();

  const { modalVisible, setModalVisible, groups } = useGroupSelect();

  const { pressedActivity, modalVisible: confirmationModalVisible, setModalVisible: setConfirmationModalVisible, isSaved } = useConfirmationModal();
  const { loading, data } = useSelector((state: IState) => state.activities);
  const { data: userData, loading: loadingUserData } = useSelector((state: IState) => state.userData);
  const { errors, loading: loadingEditUser } = useSelector((state: IState) => state.editUser);

  const userDataSavedActivities = userData.savedActivities || [];
  const dispatch = useDispatch();

  const onGetUserDataError = () => {
    Alert.alert("Erro ao buscar seus dados!");
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    if (userData) dispatch(getActivitiesRequest());
    setRefreshing(false);
  }, []);

  useEffect(() => {
    if (userUid) dispatch(getUserDataRequest({ id: userUid, onError: onGetUserDataError }));
  }, [userUid])

  useEffect(() => {
    dispatch(getCampusesRequest());
  }, [])

  useEffect(() => {
    if (userData) {
      const savedActivities = userData.savedActivities || [];
      const userDataSavedActivitiesIds = savedActivities?.map(item => item.id);
      dispatch(getUserSavedActivitiesRequest({ids: userDataSavedActivitiesIds, onError}))
      dispatch(getActivitiesRequest());
    }
  }, [userData]);
  

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
        <Activity userPublished={item.publisherId === userData.uid} data={item} onPress={() => push('ActivityDetails', { data: item })}/>  
      </Animated.View>
    )
  };

  const onError = () => {
    setConfirmationModalVisible(false);
    errors?.forEach(error => {
      Alert.alert(
        isSaved ? 'Erro ao remover atividade!' : 'Erro ao salvar atividade!',
        error
      );
    })
  }

  const onSuccess = () => {
   setConfirmationModalVisible(false);
   dispatch(getUserDataRequest({ id: userUid, onError: onGetUserDataError }))
   dispatch(getActivitiesRequest());
   Alert.alert(isSaved ? 'Atividade removida com sucesso!' : 'Atividade salva com sucesso!',)
  }

  const handleSaveActivity = () => {
    if (userData._id){
      dispatch(
        editUserRequest(
          { _id: userData._id }, 
          { savedActivities: [...userDataSavedActivities, { id: pressedActivity.id }] },
          onError,
          onSuccess
        )
      );
    }
  }

  const handleUnsaveActivity = () => {
    if (userData._id){
      const filteredActivities = userDataSavedActivities.filter((item) => item.id !== pressedActivity.id);
      dispatch(
        editUserRequest(
          { _id: userData._id }, 
          { savedActivities: [...filteredActivities] },
          onError,
          onSuccess
        )
      );
    }
  }

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
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                />
                ) : (
                 <EmptyMessage/>
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
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={confirmationModalVisible}
          onBackdropPress={() => setConfirmationModalVisible(false)}
        >
          <ConfirmationModalContent 
            title={
              isSaved ? 
              `Deseja remover a atividade "${pressedActivity.title}" dos seu itens salvos?`
              : `Deseja salvar a atividade "${pressedActivity.title}"?`
            }
            onYes={() => isSaved ? handleUnsaveActivity() : handleSaveActivity()}
          />
      </Modal>
      <Spinner
        visible={loadingEditUser || loadingUserData}
        textContent='Carregando...'
        textStyle={{ color: "#fff" }}
      />
    </Background>
  )
}

export default Home;