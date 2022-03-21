import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { IState } from '../../store';
import { editUserRequest } from '../../store/modules/LoggedUser/editUser/actions';
import { getUserDataRequest } from '../../store/modules/LoggedUser/userData/actions';
import { Container, DataContainer } from './styles';

const EditProfile: React.FC = () => {
  const { data } = useSelector((state: IState) => state.userData);
  const { errors } = useSelector((state: IState) => state.editUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const [profileName, setProfileName] = useState<string>(data.name);
  const [profilePicture, setProfilePicture] = useState<string>();
  
  const getDocument = async () => {
    const file: any = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
      quality: 0.1,
      aspect: [4, 3]
    });

    setProfilePicture(file.base64);
  }

  const onError = () => {
    errors?.forEach(error => {
      Alert.alert(
        'Erro ao editar seu perfil!',
        error
      );
    })
  }

  const onSuccess = () => {
   Alert.alert('Perfil atualizado com sucesso!');
   dispatch(
    getUserDataRequest({id: data.uid})
  );
   navigation.goBack();
  }

  const handleFinishEditing = () => {
    if (data._id){

      const editUserData = { name: profileName, image: profilePicture }

      dispatch(
        editUserRequest(
          { _id: data._id }, 
          editUserData,
          onError,
          onSuccess
        )
      );
    }
  }
  
  return (
    <Container>
      <DataContainer>
        <TouchableOpacity onPress={getDocument}>
          <Avatar size='big' base64={profilePicture ? profilePicture : data.image}/>
        </TouchableOpacity>
        <Input placeholder='Nome' value={profileName} onChangeText={(text: string) => setProfileName(text)} />
      </DataContainer>
      <Button type='primary' onPress={handleFinishEditing}>Salvar Alterações</Button>
    </Container>
  )
}

export default EditProfile;