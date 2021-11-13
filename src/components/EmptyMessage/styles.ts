import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

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

export const Message = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  text-align: center;
`