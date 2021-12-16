import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { IState } from '../../store';
import { Container, DataContainer } from './styles';

const EditProfile: React.FC = () => {
  const { data } = useSelector((state: IState) => state.userData);

  const [profileName, setProfileName] = useState<string>(data.name);
  
  return (
    <Container>
      <DataContainer>
        <Avatar size='big'/>
        <Input placeholder='Nome' value={profileName} onChangeText={(text: string) => setProfileName(text)} />
      </DataContainer>
      <Button type='primary' onPress={() => {}}>Salvar Alterações</Button>
    </Container>
  )
}

export default EditProfile;