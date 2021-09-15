import React from 'react';

import { View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { useAuth } from '../../hooks/auth';
import LogoImage from '../../../assets/Logo.png';
import FacebookLogo from '../../../assets/svg/facebook.svg';
import GoogleLogo from '../../../assets/svg/google.svg';

import { 
  Logo, 
  Background, 
  LoginInput, 
  ForgotPassword, 
  LinearGradientBox,
  LoginButton,
  ThirdPartyLoginContainer,
  Trace,
  Row,
  GreyText
} from './styles';
import { RootStackParamList } from '../../routes/auth.routes';

type LoginScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const SignIn: React.FC = () => {

  const { setIsAuthenticated } = useAuth();

  const { navigate } = useNavigation<LoginScreenProp>();

  return (
    <Background>
      <LinearGradientBox 
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }} 
        colors={['#3dbdf8', '#1b79d1']}
      />
      <Logo source={LogoImage}/>
      <View>
        <LoginInput
          mode='outlined'
          label="E-mail ou RA"
          value={''}
          onChangeText={() => {}}
        />
        <LoginInput
          mode='outlined'
          label="Senha"
          value={''}
          onChangeText={() => {}}
        />
        <TouchableOpacity>
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </TouchableOpacity>
      </View>
      <View>
        <LoginButton mode="contained" onPress={() => setIsAuthenticated(true)}>Entrar</LoginButton>
        <LoginButton register mode="contained" onPress={() => navigate('SignUp')}>Cadastrar</LoginButton>
      </View>
      <ThirdPartyLoginContainer>
        <Row>
          <Trace/>
          <GreyText>Ou entrar com:</GreyText>
          <Trace/>
        </Row>
        <Row>
          <View style={{marginRight: 20}}>
            <GoogleLogo />
          </View>
          <FacebookLogo/>
        </Row>
      </ThirdPartyLoginContainer>
    </Background>
  )
}

export default SignIn;

