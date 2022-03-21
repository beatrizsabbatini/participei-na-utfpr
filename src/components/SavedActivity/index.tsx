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
  const [errorsString, setErrorsString] = useState<string>('');

  useEffect(() => {
    if (errors){
      const printErrors = '';
      errors.forEach(item => {
        printErrors.concat(` ${item}`);
      })
      setErrorsString(printErrors);
    }
  }, [errors]);
  
  
  const onError = () => {
      Alert.alert(
        'Erro ao anexar certificado!',
        errorsString
      );
  }

  const onSuccess = () => {
    dispatch(getUserDataRequest({id: userData.uid}));
    dispatch(getUserSavedActivitiesRequest({id: userData.uid}));
  }

  const getDocument = async () => {
    const file: any = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      base64: true,
      quality: 0.5,
    });

    return file.base64

    // let result = await DocumentPicker.getDocumentAsync({
    //     copyToCacheDirectory: false,
    //     type: '*/*'
    //   });

    // return result
  }

  const uploadCertificate = async() => {
    const file: any = await getDocument();

 
    if (file) {
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

          const body = {
            savedActivities: userData.savedActivities,
            certificate: file
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
              body,
              onError,
              onSuccess,
            )
          );
        }
    }
  }

  const fileTypesSignatures: any = {
    JVBERi0: "pdf",
    R0lGODdh: "gif",
    R0lGODlh: "gif",
    iVBORw0KGgo: "png",
    "/9j/": "jpg"
  };

  function detectFileType() {
    for (var s in signatures) {
      if ( data.certificate?.indexOf(s) === 0) {
        return fileTypesSignatures[s];
      }
    }
  }

  const signatures: any = {
    JVBERi0: "application/pdf",
    R0lGODdh: "image/gif",
    R0lGODlh: "image/gif",
    iVBORw0KGgo: "image/png",
    "/9j/": "image/jpg"
  };
  
  function detectMimeType() {
    for (var s in signatures) {
      if (data.certificate.indexOf(s) === 0) {
        return signatures[s];
      }
    }
  }

  const handleDownloadCertificate = async () => {

    const permission: any = await  ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.canAskAgain || permission.status === "denied") {
      Alert.alert("Erro!", "Sem aceitar as permissões não é possível baixar o certificado! Tente novamente.")
    } else {

      const type = detectFileType();

      const filename = FileSystem.documentDirectory + "certificado." + type;
  
      try {
        await FileSystem.writeAsStringAsync(filename, data.certificate, {
          encoding: FileSystem.EncodingType.Base64,
        });
        
        await MediaLibrary.saveToLibraryAsync(filename);

        Alert.alert("Sucesso!", "Certificado foi salvo no seu dispositivo")
      } catch (error) {
        Alert.alert("Erro!", "Não foi possível baixar o certificado")
      }
    }

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
        <TouchableOpacity>
        <FontAwesome5 name="trash" size={18} color={theme.colors.secondary} />
        </TouchableOpacity>
      </CardBottom>
        {data.certificate ? (
          <CertificateContainer containsCertificate={data.certificate} onPress={handleDownloadCertificate}>
            <ThinText>Baixar certificado</ThinText>
            <Entypo name="trophy" size={15} color={theme.colors.secondary} />
          </CertificateContainer>
        ) : (
          <CertificateContainer onPress={() => uploadCertificate()}>
            <ThinText>Adicionar certificado</ThinText>
            <MaterialIcons name="note-add" size={18} color={theme.colors.secondary} />
          </CertificateContainer>
        )}
    </Container>
  )
}

export default SavedActivity;