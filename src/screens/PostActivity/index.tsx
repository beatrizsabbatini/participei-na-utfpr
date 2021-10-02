import React, { useState } from 'react';

import { View } from 'react-native';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';

import Input from '../../components/Input';
import { categories } from '../../mock/activitiesMock';
import { Container } from './styles';

const PostActivity: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  return (
    <Container>
      <View>
        <Input placeholder="Digite um título"/>
        <Input placeholder="Digite uma descrição (opcional)" multiline numberOfLines={5}/>
        <Dropdown 
          placeholder="Selecione uma categoria" 
          list={categories} 
          key="id"
          value={category} 
          setValue={setCategory}
        />
      </View>
      <Button onPress={() => {}} type="primary">Publicar</Button>
    </Container>
  )
}

export default PostActivity;