import React, { useState } from 'react';

import {Text} from 'react-native';

import Dropdown from '../../../../components/Dropdown';
import { Step } from '../..';
import { mockCampuses } from '../../../../mock/activitiesMock';

const Step4: React.FC<Step> = ({formProps}) => {
  const [value, setValue] = useState();
  
  return (
    <>
      <Dropdown 
        list={mockCampuses} 
        value={value} 
        setValue={setValue} 
        placeholder="Selecione um campus"
        onValueChange={(value: any) => formProps.setFieldValue('campusId', value)}
      />
      <Text style={{color: '#e53d3d', marginTop: 20 }}>{formProps.errors.campusId}</Text>
    </>
  )
}

export default Step4;