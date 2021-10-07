import React from 'react';

import { View } from 'react-native';
import { Step } from '../..';
import Input from '../../../../components/Input';

const Step2: React.FC<Step> = ({formProps, setPasswordCopy}) => {
  return (
    <View>
      <Input 
        placeholder={formProps.errors.password || "Crie uma senha"} 
        error={formProps.errors.password}
        value={formProps.values.password} 
        onChangeText={(text: string) => {
          formProps.setFieldValue('password', text);
          setPasswordCopy && setPasswordCopy(text);
        }}
        onBlur={() => formProps.validateField('password')}
        secureTextEntry
      />
      <Input 
        placeholder={formProps.errors.confirmPassword || "Confirme sua senha"} 
        error={formProps.errors.confirmPassword}
        value={formProps.values.confirmPassword} 
        onChangeText={(text: string) => formProps.setFieldValue('confirmPassword', text)}
        onBlur={() => formProps.validateField('confirmPassword')}
        secureTextEntry
      />
    </View>
  )
}

export default Step2;