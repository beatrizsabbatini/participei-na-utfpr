import React, { useEffect, useState } from 'react';

import { View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import { IActivity } from '../../types';
import theme from '../../global/styles/theme';
import Badge from '../Badge';
import { HomeStackParamList } from '../../routes/app.routes';
import { 
  Container, 
  CardTop, 
  Title, 
  Category,
  CardBottom,
  SeeMoreContainer,
  SeeMoreText,
  CertificateContainer,
  ThinText
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { editUserRequest } from '../../store/modules/LoggedUser/editUser/actions';
import { IState } from '../../store';
import { getUserDataRequest } from '../../store/modules/LoggedUser/userData/actions';
import { getUserSavedActivitiesRequest } from '../../store/modules/LoggedUser/savedActivities/actions';
import { useConfirmationModal } from '../../hooks/ConfirmationModal';

interface SavedActivityProps{
  data: IActivity;
  onPress: () => void;
  userPublished?: boolean;
}


type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const SavedActivity: React.FC<SavedActivityProps> = ({ data, onPress }) => {
  const { navigate } = useNavigation<HomeScreenProp>();
  const dispatch = useDispatch();
  const { data: userData, errors } = useSelector((state: IState) => state.userData);

  const { setPressedActivity, setModalVisible, setIsSaved } = useConfirmationModal();
  
  const onError = () => {
      Alert.alert(
        'Erro ao anexar certificado!',
      );
  }

  const onSuccess = () => {
    dispatch(getUserDataRequest({id: userData.uid}));
    dispatch(getUserSavedActivitiesRequest({id: userData.uid}));
  }

  const uploadCertificate = async() => {
    const image: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
    });

    const localUri = image.uri;
    const filename = localUri.split('/').pop();

    //Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    const formData: any = new FormData();
    formData.append('savedActivities',  JSON.stringify(userData.savedActivities || []));
    formData.append('file', { type:type, uri: localUri, name: filename});
 
    if (!image.cancelled) {
        if (userData._id){

          const groupPreviousPoints = () => {
            switch (data.category.group) {
              case 1:
                return userData.group1Points;

              case 2:
              return userData.group2Points;

              case 3:
              return userData.group3Points
            
              default:
                break;
            }
          }
    
          dispatch(
            editUserRequest(
              { 
                _id: userData._id, 
                activityId: data.id, 
                group: data.category.group, 
                points: data.category.points,
                previousGroupPoints: groupPreviousPoints()
              }, 
              formData,
              onError,
              onSuccess,
              true
            )
          );
        }
    }
  }

  const downloadCertificate = (url: string, name: string) => {
    
    FileSystem.downloadAsync(
      url,
      FileSystem.documentDirectory + name
    )
      .then(async ({ uri }) => {

        const asset = await MediaLibrary.createAssetAsync(uri);

        MediaLibrary.createAlbumAsync("Certificados", asset, false)
          .then(() =>  Alert.alert('Certificado baixado com sucesso!', 'confira sua galeria.'))
          .catch((err) =>  Alert.alert('Erro ao baixar certificado!', err));

      })
      .catch(error => {
        console.error(error);
      });

  }

  const handlePressedFolder = () => {
    setIsSaved(true);
    setPressedActivity(data);
    setModalVisible(true);
  }

  return (
    <Container onPress={onPress}>
      <CardTop>
        <View style={{flex: 7}}>
          <Category>{data.category.label}</Category>
          <Title>{data.title}</Title>
        </View>
        <View style={{flex: 3}}>
          <Badge group={data.category.group} marginVertical/>
          <Badge points={data.category.points} marginVertical/>
        </View>
      </CardTop>
      <CardBottom>
        <SeeMoreContainer onPress={() => navigate('ActivityDetails', { data })}>
          <MaterialIcons name="add" size={14} color={theme.colors.primary_light} />
          <SeeMoreText>Toque para ver mais</SeeMoreText>
        </SeeMoreContainer>
        <TouchableOpacity onPress={handlePressedFolder}>
          <MaterialIcons name='folder' size={24} color={theme.colors.primary_light} />
        </TouchableOpacity>
      </CardBottom>
        {data.certificate ? (
          <CertificateContainer containsCertificate={data.certificate} onPress={() => downloadCertificate(data.certificate.url, data.certificate.key)}>
            <ThinText>Baixar foto do certificado</ThinText>
            <Entypo name="trophy" size={15} color={theme.colors.secondary} />
          </CertificateContainer>
        ) : (
          <CertificateContainer onPress={() => uploadCertificate()}>
            <ThinText>Adicionar foto do certificado</ThinText>
            <MaterialIcons name="note-add" size={18} color={theme.colors.secondary} />
          </CertificateContainer>
        )}
    </Container>
  )
}

export default SavedActivity;