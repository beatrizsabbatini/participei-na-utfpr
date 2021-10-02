import styled from "styled-components/native";
import { Picker } from '@react-native-picker/picker';
import { RFValue } from "react-native-responsive-fontsize";

export const CustomPicker = styled(Picker)`
  background-color: transparent;
  width: ${RFValue(295)}px;
  height: ${RFValue(45)}px;
  margin-left: ${RFValue(5)}px;
  display: flex;
`

export const PickerContainer = styled.View`
  border-width: ${RFValue(1)}px;
  border-color: ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(28)}px;
  margin-top: ${RFValue(18)}px;
`