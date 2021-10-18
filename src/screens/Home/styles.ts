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

export const EmptyMessageContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
  opacity: 0.5;
`

export const EmptyIcon = styled.Image`
  height: ${RFValue(140)}px;
  width: ${RFValue(210)}px;
  margin-bottom: ${RFValue(10)}px;
  resizeMode: contain;
`

export const EmptyMessage = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  text-align: center;
`