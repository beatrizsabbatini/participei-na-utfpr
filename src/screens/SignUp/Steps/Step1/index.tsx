import React from 'react';

import { View } from 'react-native';

import { Step } from '../..';
import Input from '../../../../components/Input';


const Step1: React.FC<Step> = ({formProps}) => {
  return (
    <View>
      <Input 
        autoCorrect={false}
        placeholder={formProps.errors.email || "Digite um e-mail"} 
        error={formProps.errors.email}
        value={formProps.values.email} 
        onChangeText={(text: string) => formProps.setFieldValue('email', text)}
        onBlur={() => formProps.validateField('email')}
      />
    </View>
  )
}

export default Step1;