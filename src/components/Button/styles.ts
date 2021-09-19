import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "react-native-paper";

interface ButtonProps{
  color?: string
}

export const PrimaryButton = styled(Button)<ButtonProps>`
  width:  ${RFValue(300)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  background-color: ${({color}) => color};
  margin-top: ${RFValue(12)}px;
  color: #fff;
`