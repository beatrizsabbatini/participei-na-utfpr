import React, { useState } from 'react';

import { View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import Modal from "react-native-modal";

import theme from '../../global/styles/theme';
import Badge from '../Badge';
import { IActivity } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../routes/app.routes';
import { useConfirmationModal } from '../../hooks/ConfirmationModal';
import { 
  Container, 
  CardTop, 
  Title, 
  Category,
  CardBottom,
  SeeMoreContainer,
  SeeMoreText,
  Row
} from './styles';
import { useAuth } from '../../hooks/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { editActivityRequest } from '../../store/modules/Activities/editActivity/actions';
import { IState } from '../../store';
import ConfirmationModalContent from '../ConfirmationModalContent';
import { getActivitiesRequest } from '../../store/modules/Activities/getActivities/actions';

interface ActivityProps{
  data: IActivity;
  onPress: () => void;
  userPublished?: boolean;
}

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Activity: React.FC<ActivityProps> = ({data, onPress, userPublished}) => {
  const [hideActivityModalVisible, setHideActivityModalVisible] = useState<boolean>(false);
  const { navigate, push } = useNavigation<HomeScreenProp>();
  const dispatch = useDispatch();

  const { setPressedActivity, setModalVisible, setIsSaved } = useConfirmationModal();
  const { data: userData } = useSelector((state: IState) => state.userData);
 
  const handleEditActivity = () => {
    navigate('EditActivity', { data } )
  }

  const handlePressedFolder = () => {
    setIsSaved(data.saved || false);
    setPressedActivity(data);
    setModalVisible(true);
  }

  const onSuccess = () => {
    dispatch(getActivitiesRequest());
    setHideActivityModalVisible(false);
    return Alert.alert('Sucesso ao arquivar atividade!', 'Agora esta atividade não aparecerá mais no feed.');
  }

  const onError = () => {
    setHideActivityModalVisible(false);
    return Alert.alert('Erro ao arquivar atividade!', 'Verifique sua conexão com a internet.');
  }

  const handleHideActivityFromFeed = () => {
    dispatch(editActivityRequest({id: data.id, activity: { hidden: true }, onSuccess, onError}));
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
          <SeeMoreContainer onPress={() => push('ActivityDetails', { data })}>
            <MaterialIcons name="add" size={14} color={theme.colors.primary_light} />
            <SeeMoreText>Toque para ver mais</SeeMoreText>
          </SeeMoreContainer>
          {userData.admin ? (
            <TouchableOpacity onPress={() => setHideActivityModalVisible(true)}>
              <Ionicons name="file-tray" size={22} color={theme.colors.primary_light} />
            </TouchableOpacity>
          ) : (
            <Row userPublished={userPublished}>
            {userPublished && (
              <TouchableOpacity onPress={handleEditActivity}>
                <MaterialIcons name="edit" size={22} color={theme.colors.primary_light} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handlePressedFolder}>
              <MaterialIcons name={data.saved ? 'folder' : 'folder-open'} size={24} color={theme.colors.primary_light} />
            </TouchableOpacity>
          </Row>
          )}
        </CardBottom>
      </Container>
      <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={hideActivityModalVisible}
          onBackdropPress={() => setHideActivityModalVisible(false)}
        >
          <ConfirmationModalContent 
            title={`Deseja arquivar a atividade "${data.title}"? Essa ação não poderá ser desfeita!`}
            onYes={handleHideActivityFromFeed}
          />
      </Modal>
    </>
  )
}

export default Activity;