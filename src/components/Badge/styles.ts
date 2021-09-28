import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

interface BadgeStyleProps{
  color?: string;
  marginVertical?: boolean;
  marginHorizontal?: boolean;
}

export const Container = styled.View<BadgeStyleProps>`
  background-color: ${({color, theme}) => color || theme.colors.primary_dark};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-vertical: ${({ marginVertical }) => marginVertical ? `${RFValue(2.6)}px` : 0};
  margin-horizontal: ${({ marginHorizontal }) => marginHorizontal ? `${RFValue(5)}px` : 0};
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 3;
`

export const BadgeText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(12)}px;
  padding-vertical: ${RFValue(3)}px;
  padding-horizontal: ${RFValue(8)}px;
`