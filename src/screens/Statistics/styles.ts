import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme }) => theme.colors.background };
  padding: ${RFValue(25)}px;
`

export const Row = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-self: center;
`