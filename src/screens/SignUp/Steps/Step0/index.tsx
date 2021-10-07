import React from 'react';

import { View } from 'react-native';

import { Step } from '../..';
import Input from '../../../../components/Input';


const Step0: React.FC<Step> = ({formProps}) => {
  return (
    <View>
      <Input 
        placeholder={formProps.errors.name || "Digite seu nome"} 
        error={formProps.errors.name}
        value={formProps.values.name} 
        onChangeText={(text: string) => formProps.setFieldValue('name', text)}
        onBlur={() => formProps.validateField('name')}
      />
    </View>
  )
}

export default Step0;