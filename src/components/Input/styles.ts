import styled from "styled-components";
import { TextInput } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

export const CustomInput = styled(TextInput)`
  background-color: ${({theme }) => theme.colors.background };
  width: ${RFValue(300)}px;
  height: ${RFValue(45)}px;
  margin-top: ${RFValue(12)}px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.25;
  shadow-radius: ${RFValue(3.84)}px;
  elevation: 5;
`