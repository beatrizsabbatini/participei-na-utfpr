import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';

export const Background = styled.View`
  flex: 1;
  background-color: #fcfdff;
  align-items: center;
  padding: ${RFValue(25)}px ${RFValue(25)}px 0 ${RFValue(25)}px;
`;

export const LinearGradientBox = styled(LinearGradient)`
  width: 100%;
  height: 80px;
`