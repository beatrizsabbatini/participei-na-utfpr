import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';

import Dropdown from '../../../../components/Dropdown';
import { Step } from '../..';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { ICampus } from '../../../../types';

const Step4: React.FC<Step> = (
  {
    formProps, 
    campusValue,
    departmentValue,
    setCampusValue,
    setDepartmentValue
  }
  ) => {
  const [departments, setDepartments] = useState<any>();
  const [selectedCampus, setSelectedCampus] = useState<ICampus>();
  const { data } = useSelector((state: IState) => state.campuses);

  useEffect(() => {
    if (campusValue){
      const campusFound: ICampus | undefined = data.find((item: ICampus) => item.id === campusValue);
      setSelectedCampus(campusFound);
      setDepartments([
        {
          placeholder: true,
          value: '0',
          label: 'Departamento do seu curso',
          id: '0'
        },
        ...campusFound?.departments || []
      ])
    }
  }, [campusValue])
  
  return (
    <>
      <Dropdown 
        enabled
        list={data} 
        value={campusValue} 
        setValue={setCampusValue} 
        placeholder="Selecione um campus"
        onValueChange={(value: any) => formProps.setFieldValue('campusId', value)}
      />
      {campusValue && (
        <>
          <Dropdown 
            enabled={selectedCampus !== undefined}
            list={departments || []} 
            value={departmentValue} 
            setValue={setDepartmentValue} 
            placeholder="Departamento do seu curso"
            onValueChange={(value: any) => formProps.setFieldValue('departmentId', value)}
          />
        </>
      )}
    </>
  )
}

export default Step4;