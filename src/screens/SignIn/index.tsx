import React, { useState } from 'react';

import { View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Yup from 'yup';
import firebase from 'firebase';

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

interface FormProps{
  values: any,
  handleChange: (text: string) => void,
  handleSubmit: (values: any) => void,
  errors: any,
  setFieldValue: any
}

const SignIn: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false);

  const { setIsAuthenticated } = useAuth();

  const { navigate } = useNavigation<LoginScreenProp>();

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail é obrigatório!')
      .email('Digite um email válido!'),
    password: Yup.string().required('Senha é obrigatório!'),
  });

  const loginService = async (values: any) => {
      setLoading(true);

      return await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          setLoading(false);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert('Erro!', getMessageByErrorCode(error.code));
        });
    }
  
  function getMessageByErrorCode(code: any) {
    switch (code) {
      case 'auth/user-not-found':
        return 'Usuário não encontrado! Crie uma conta para logar com esse e-mail.';
  
      case 'auth/wrong-password':
        return 'Senha incorreta! Tente novamente.';
  
      default:
        break;
    }
  }

  return (
    <Background>
       <LinearGradientBox 
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }} 
        colors={['#3dbdf8', '#1b79d1']}
      />
      <Shadow />
      <Logo source={LogoImage}/>
      <Spinner
        visible={loading}
        textContent='Carregando...'
        textStyle={{ color: "#fff" }}
      />

      <Formik
        validationSchema={loginFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: 'matheus@teste.com', 
          password: '123456',
        }}
        onSubmit={(values) => loginService(values)}
      >
        {({ values, setFieldValue, handleSubmit, errors }: FormProps) => (
          <>
            <View>
              <Input 
                disabled={loading}
                error={errors.email}
                placeholder={errors.email || "E-mail ou RA"}
                value={values.email} 
                onChangeText={(text: string) => setFieldValue('email', text)}
                />
              <Input 
                disabled={loading}
                error={errors.password}
                secureTextEntry 
                placeholder={errors.password || "Senha"} 
                value={values.password} 
                onChangeText={(text: string) => setFieldValue('password', text)}
              />
              <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                <ForgotPassword>Esqueci minha senha</ForgotPassword>
              </TouchableOpacity>
            </View>
            <View>
              <Button onPress={() => handleSubmit(values)} type="light">Entrar</Button>
              <Button onPress={() => navigate('SignUp')} type="dark">Cadastrar</Button>
            </View>
            <View/>
          </>
        )}
      </Formik>
    </Background>
  )
}

export default SignIn;

