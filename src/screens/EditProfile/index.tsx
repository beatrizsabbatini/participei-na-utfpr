import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
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
  
  const [image, setImage] = useState<string>('');
  const [profileName, setProfileName] = useState<string>(data.name);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
      dispatch(
        editUserRequest(
          data._id, 
          { name: profileName },
          onError,
          onSuccess
        )
      );
    }
  }
  
  return (
    <Container>
      <DataContainer>
        <Avatar size='big'/>
        <Input placeholder='Nome' value={profileName} onChangeText={(text: string) => setProfileName(text)} />
      </DataContainer>
      <Button type='primary' onPress={handleFinishEditing}>Salvar Alterações</Button>
    </Container>
  )
}

export default EditProfile;