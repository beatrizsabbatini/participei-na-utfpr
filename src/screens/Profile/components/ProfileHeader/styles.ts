import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface CustomTextProps{
  bigger?: boolean;
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(25)}px;
`;

export const CustomText = styled.Text<CustomTextProps>`
  font-weight: 100;
  font-size: ${({bigger}) => bigger ? RFValue(22) : RFValue(15)}px;
  color: ${({theme}) => theme.colors.primary};
`