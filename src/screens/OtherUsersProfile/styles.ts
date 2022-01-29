import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-horizontal: ${RFValue(15)}px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  padding: ${RFValue(10)}px;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`

export const ShadowDivider = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  position: relative;
  width: 100%;
  height: 1px;
  align-self: stretch;
  justify-content: space-between;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 5;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`