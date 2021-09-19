import styled from "styled-components";
import { TextInput } from "react-native-paper";

export const CustomInput = styled(TextInput)`
  background-color: ${({theme }) => theme.colors.background };
  width: 300px;
  height: 50px;
  margin-top: 12px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`