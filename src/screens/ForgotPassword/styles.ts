import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: ${RFValue(25)}px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;

