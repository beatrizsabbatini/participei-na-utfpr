import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "react-native-paper";

interface PrimaryButtonProps{
  width?: string;
}

export const PrimaryButton = styled(Button)<PrimaryButtonProps>`
  width:  ${({width}) => width || `${RFValue(300)}px`};
  height: ${RFValue(40)}px;
  justify-content: center;
  margin-top: ${RFValue(12)}px;
`