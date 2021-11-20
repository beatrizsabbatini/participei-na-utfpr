import React from 'react';

import { View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Modal from "react-native-modal";

import { IActivity } from '../../types';
import { 
  Container, 
  CardTop, 
  Title, 
  Category,
  CardBottom,
  SeeMoreContainer,
  SeeMoreText,
} from './styles';
import theme from '../../global/styles/theme';
import Badge from '../Badge';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../routes/app.routes';
import { useConfirmationModal } from '../../hooks/ConfirmationModal';
import ConfirmationModalContent from '../ConfirmationModalContent';
import { useDispatch, useSelector } from 'react-redux';
import { editUserRequest } from '../../store/modules/LoggedUser/editUser/actions';
import firebase from 'firebase';
import { IState } from '../../store';

interface ActivityProps{
  data: IActivity;
  onPress: () => void;
  userPublished?: boolean;
}

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Activity: React.FC<ActivityProps> = ({data, onPress, userPublished}) => {
  const { navigate } = useNavigation<HomeScreenProp>();

  const { setPressedActivity, setModalVisible } = useConfirmationModal();

  const { data: userData } = useSelector((state: IState) => state.userData);
  const { errors } = useSelector((state: IState) => state.editUser);

  const userDataSavedActivitiesIds = userData.savedActivitiesIds;
  const userUid = firebase.auth().currentUser?.uid;
  const dispatch = useDispatch();

  const onError = () => {
    errors?.forEach(error => {
      Alert.alert(
        'Erro ao salvar atividade!',
        error
      );
    })
  }

  const handlePress = () => {
    if (userPublished){
      navigate('EditActivity', { data } )
    } else {
      setPressedActivity(data);
      setModalVisible(true);
    }
  }

  const handleSaveActivity = () => {
    if (userData._id){
      dispatch(
        editUserRequest(
          userData._id, 
          { savedActivitiesIds: [...userDataSavedActivitiesIds, data.id] },
          onError 
        )
      );
    }
  }

  return (
    <>
      <Container onPress={onPress}>
        <CardTop>
          <View style={{flex: 7}}>
            <Category>{data?.category.label}</Category>
            <Title>{data?.title}</Title>
          </View>
          <View style={{flex: 3, alignItems: 'flex-end'}}>
            <Badge group={data.category.group} marginVertical/>
            <Badge points={data.category.points} marginVertical/>
          </View>
        </CardTop>
        <CardBottom>
          <SeeMoreContainer onPress={() => navigate('ActivityDetails', { data })}>
            <MaterialIcons name="add" size={14} color={theme.colors.primary_light} />
            <SeeMoreText>Toque para ver mais</SeeMoreText>
          </SeeMoreContainer>
          <TouchableOpacity onPress={handlePress}>
            {userPublished ? (
              <MaterialIcons name="edit" size={24} color={theme.colors.secondary} />
            ) : (
              <MaterialIcons name={data.saved ? 'folder' : 'folder-open'} size={24} color={theme.colors.primary_light} />
            )}
          </TouchableOpacity>
        </CardBottom>
      </Container>
      {/* <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        backdropColor="rgba(0,0,0,0.4)"
      >
        <ConfirmationModalContent 
          title={`Deseja salvar a atividade ${data?.title} ?`}
          onYes={handleSaveActivity}
        />
      </Modal> */}
    </>
  )
}

export default Activity;