import React from 'react';

import { TextInputProps } from 'react-native';

import { CustomInput } from './styles';
export interface InputProps extends TextInputProps { // added extends TextInputProps and renamed interface
  mode?: 'flat' | 'outlined';
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: boolean;
  onChangeText?: () => void;
  underlineColor?: string;
  multiline?: boolean;
  numberOfLines?: number;
  onFocus?: () => any;
  onBlur?: () => any;
  value?: string;
  style?: any;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <CustomInput  
      mode='outlined' 
      label={`    ${props.placeholder}`}
      value={props.value}
      onChangeText={() => props.onChangeText}
    />
  )
}

export default Input;