import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${RFValue(100)}px;
  padding-bottom: ${RFValue(20)}px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`

export const DataContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`