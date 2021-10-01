import React from 'react';

import { View } from 'react-native';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { Container } from './styles';

const PostActivity: React.FC = () => {
  return (
    <Container>
      <View>
        <Input placeholder="Digite um título"/>
        <Input placeholder="Digite uma descrição (opcional)"/>
        <Input placeholder="Selecione uma categoria"/>
      </View>
      <Button onPress={() => {}} type="primary">Publicar</Button>
    </Container>
  )
}

export default PostActivity;