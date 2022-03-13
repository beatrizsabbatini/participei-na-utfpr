import React from 'react';

import { Picker } from '@react-native-picker/picker';

import theme from '../../global/styles/theme';
import { CustomPicker, PickerContainer } from './styles';

interface DropDownProps {
  placeholder: string,
  value: any,
  setValue: any,
  list: any[],
  onValueChange: (value: any) => void;
  enabled: boolean;
}

const Dropdown: React.FC<DropDownProps> = (props) => {  

  return (
    <PickerContainer>
      <CustomPicker
        enabled={props.enabled}
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
