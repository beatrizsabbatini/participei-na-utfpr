import styled from 'styled-components/native';

import { TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

interface LoginButtonProps{
  register?: boolean
}

export const Logo = styled.Image`
  height: 140px;
  width: 210px;
  resizeMode: contain;
  margin-bottom: 20px;
`

export const Background = styled.View`
  flex: 1; 
  justify-content: space-between; 
  align-items: center;
  background-color: ${({theme }) => theme.colors.background };
`

export const LoginInput = styled(TextInput)`
  background-color: ${({theme }) => theme.colors.background };
  width: 300px;
  height: 50px;
  margin-top: 12px;
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
  height: 27px;
`
export const LoginButton = styled(Button)<LoginButtonProps>`
  width: 300px;
  height: 50px;
  justify-content: center;
  background-color: ${({theme, register}) => register ? theme.colors.primary_dark : theme.colors.primary_light};
  margin-top: 12px;
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