import React from 'react';

import { View } from 'react-native';
import Input from '../../../../components/Input';

const Step2: React.FC = () => {
  return (
    <View>
      <Input placeholder="Crie uma senha"/>
      <Input placeholder="Confirme sua senha" />
    </View>
  )
}

export default Step2;