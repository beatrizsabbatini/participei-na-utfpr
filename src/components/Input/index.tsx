import React from 'react';

import { CustomInput } from './styles';

interface InputProps{
  placeholder: string
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <CustomInput  
      mode='outlined' 
      label={placeholder}
      value={''}
      onChangeText={() => {}}
    />
  )
}

export default Input;