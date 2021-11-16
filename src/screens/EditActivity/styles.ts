import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  padding: ${RFValue(25)}px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
