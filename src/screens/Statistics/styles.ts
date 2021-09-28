import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface RowProps{
  alignItems?: string;
  paddingTop?: boolean;
}

export const Background = styled.ScrollView`
  background-color: ${({theme }) => theme.colors.background };
  padding: ${RFValue(25)}px;
`

export const Row = styled.View<RowProps>`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || 'flex-end'};
  align-self: center;
  
  ${({ paddingTop }) => paddingTop && css`
    padding-top: ${RFValue(15)}px;
  `};
`

export const RedLine = styled.View`
  width: ${RFValue(30)}px;
  height: ${RFValue(1.7)}px;
  background-color: #f34e4e;
  margin-right: 10px;
`

export const BlueLine = styled(RedLine)`
  background-color: #407bd4;
`

export const Instructions = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(14)}px;
  font-weight: 100;
  width: 85%;
`

export const InstructionsContainer = styled.View`
  margin-vertical: ${RFValue(20)}px;
`

export const GrayRectangle = styled.View`
  height: ${RFValue(10)}px;
  width: ${RFValue(30)}px;
  margin-right: 10px;
  background-color: #EFEFEF;
`