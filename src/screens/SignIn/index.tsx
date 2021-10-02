import React from 'react';

import { View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { useAuth } from '../../hooks/Auth';
import { AuthStackParamList } from '../../routes/auth.routes';
import LogoImage from '../../../assets/Logo.png';
import FacebookLogo from '../../../assets/svg/facebook.svg';
import GoogleLogo from '../../../assets/svg/google.svg';
import Button from '../../components/Button';
import { 
  Logo, 
  Background, 
  ForgotPassword, 
  LinearGradientBox,
  ThirdPartyLoginContainer,
  Trace,
  Row,
  GreyText,
  Shadow
} from './styles';
import Input from '../../components/Input';

type LoginScreenProp = StackNavigationProp<AuthStackParamList, 'SignUp'>;

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
      <Shadow />
      <Logo source={LogoImage}/>
      <View>
        <Input placeholder="E-mail ou RA"/>
        <Input placeholder="Senha"/>
        <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </TouchableOpacity>
      </View>
      <View>
        <Button onPress={() => setIsAuthenticated(true)} type="light">Entrar</Button>
        <Button onPress={() => navigate('SignUp')} type="dark">Cadastrar</Button>
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

