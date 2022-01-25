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
  
  const [formData, setFormData] = useState<any>();
  const [imageLocalUrl, setImageLocalUrl] = useState<string>('');
  const [profileName, setProfileName] = useState<string>(data.name);

  const pickImage = async () => {

    const image: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 0.2,
    });

    const localUri = image.uri;
    const filename = localUri.split('/').pop();
    setImageLocalUrl(image.uri);

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    const formData: any = new FormData();
    formData.append('file', { type:type, uri: localUri, name: filename});
    formData.append('name', profileName);


    if (!image.cancelled) {
      setFormData(formData);
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

      const editUserData = formData ? formData : { name: profileName }

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
        <TouchableOpacity onPress={pickImage}>
          <Avatar size='big' url={imageLocalUrl ? imageLocalUrl : data.image?.url}/>
        </TouchableOpacity>
        <Input placeholder='Nome' value={profileName} onChangeText={(text: string) => setProfileName(text)} />
      </DataContainer>
      <Button type='primary' onPress={handleFinishEditing}>Salvar Alterações</Button>
    </Container>
  )
}

export default EditProfile;