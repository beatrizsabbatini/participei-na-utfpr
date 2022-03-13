import React from 'react';
import { useSelector } from 'react-redux';

import { Step } from '../..';
import { IState } from '../../../../store';
import Input from '../../../../components/Input';

const Step3: React.FC<Step> = ({formProps}) => {
  
  return (
    <Input 
      placeholder={formProps.errors.ra || "Digite seu RA"} 
      error={formProps.errors.ra}
      value={formProps.values.ra} 
      onChangeText={(text: string) => formProps.setFieldValue('ra', text)}
      onBlur={() => formProps.validateField('ra')}
    />
  )
}

export default Step3;