import React from 'react';

import { TextInputProps } from 'react-native';

import { CustomInput } from './styles';
export interface InputProps extends TextInputProps { // added extends TextInputProps and renamed interface
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: boolean;
  onChangeText?: any;
  multiline?: boolean;
  numberOfLines?: number;
  value?: string;
}

const Input: React.FC<InputProps> = ({...props}) => {
  return (
    <CustomInput  
      error={props.error}
      disabled={props.disabled}
      mode='outlined' 
      label={`    ${props.placeholder}`}
      value={props.value}
      onChangeText={props.onChangeText}
      numberOfLines={props.numberOfLines}
      multiline={props.multiline}
    />
  )
}

export default Input;