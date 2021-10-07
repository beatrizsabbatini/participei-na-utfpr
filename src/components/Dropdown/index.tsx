import React from 'react';

import { Picker } from '@react-native-picker/picker';

import theme from '../../global/styles/theme';
import { CustomPicker, PickerContainer } from './styles';

interface DropDownProps {
  placeholder: string,
  value: any,
  setValue: (value: any) => void,
  list: any[],
  onValueChange: (value: any) => void;
}

const Dropdown: React.FC<DropDownProps> = (props) => {  

  return (
    <PickerContainer>
      <CustomPicker
        selectedValue={props.value}
        onValueChange={(itemValue) => {
          props.setValue(itemValue);
          props.onValueChange(itemValue);
        }}
      >
        {props.list.map(item => (
          <Picker.Item 
            key={item.id}
            style={{
              color: item.placeholder ? theme.colors.secondary_light : '#000', 
              fontSize: 16
            }} 
            label={item.label !== '' ? item.label : props.placeholder} 
            value={item.value}
          />
        ))}
      </CustomPicker>
    </PickerContainer>
  )
}

export default Dropdown;
