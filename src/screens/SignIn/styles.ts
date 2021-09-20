import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Logo = styled.Image`
  height: ${RFValue(140)}px;
  width: ${RFValue(210)}px;
  resizeMode: contain;
`

export const Background = styled.View`
  flex: 1; 
  justify-content: space-between; 
  align-items: center;
  background-color: ${({theme }) => theme.colors.background };
`

export const ForgotPassword = styled.Text`
  color: ${({theme }) => theme.colors.primary_light };
  textDecorationLine: underline;
  width: 300px;
  text-align: right;
  margin-right: 10px;
  margin-top: 10px;
`

export const LinearGradientBox = styled(LinearGradient)`
  width: 100%;
  height: ${RFValue(27)}px;
  position: relative;
`

export const ThirdPartyLoginContainer = styled.View`
  margin-bottom: 20px;
`

export const Trace = styled.View`
  width: 80px;
  height: 1px;
  background-color: #C4C4C4;
  margin-right: 8px;
  margin-left: 8px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const GreyText = styled.Text`
  color: #C4C4C4;
  font-weight: 100;
`

export const Shadow = styled.View`
  height: 1px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: ${RFValue(26)}px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
`

