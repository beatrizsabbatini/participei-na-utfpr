import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const ModalTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  padding-bottom: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary_light};
`

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
  width: 100%;
  margin: ${RFValue(20)}px 0;
`

export const CancelText = styled.Text`
  color: #cdcdcd;
  font-size: ${RFValue(16)}px;
`

export const ModalBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(30)}px;
`;