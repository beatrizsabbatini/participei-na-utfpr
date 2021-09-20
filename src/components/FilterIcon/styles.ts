import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: baseline;
  padding-right: ${RFValue(10)}px;
`;

export const FilterNumberBadge = styled.View`
  background-color: #DF4343;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
  margin-left: -${RFValue(6)}px;
`

export const FiltersNumber = styled.Text`
  color: #fff;
  font-size: ${RFValue(9)}px;
  margin-bottom: ${RFValue(1)}px;
`