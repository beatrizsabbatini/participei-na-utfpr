import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-horizontal: ${RFValue(15)}px;
`;

export const InstructionsText = styled.Text`
  color: ${({theme}) => theme.colors.secondary_light};
  margin-left: ${RFValue(10)}px;
  width: 85%;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-horizontal: ${RFValue(5)}px;
  margin-top: ${RFValue(15)}px;
`

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`