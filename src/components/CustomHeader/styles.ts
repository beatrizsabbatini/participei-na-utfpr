import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

export const LinearGradientBox = styled(LinearGradient)`
  width: 100%;
  height: ${RFValue(65)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 10px;
`

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  `

export const Shadow = styled.View`
  height: 1px;
  width: 100%;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`

