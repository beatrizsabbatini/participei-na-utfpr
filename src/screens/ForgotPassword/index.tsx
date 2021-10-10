import React, { useState } from 'react';

import firebase from 'firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Message, Container } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../routes/auth.routes';

interface FormProps{
  values: any,
  handleChange: (text: string) => void,
  handleSubmit: (values: any) => void,
  errors: any,
  setFieldValue: any
  validateField: any
}

type ForgotPasswordScreenProp = StackNavigationProp<AuthStackParamList, 'ForgotPassword'>;

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<ForgotPasswordScreenProp>();

  const getMessageByErrorCode = (code: any) => {
    switch (code) {
      case 'auth/user-not-found':
        return 'Esse e-mail não está cadastrado neste aplicativo!';

      default:
        return 'Erro! Verifique sua conexão com a internet ou tente mais tarde';
    }
  }

  const forgotPassword = (values: any) => {
    setLoading(true);
    firebase.auth().sendPasswordResetEmail(values.email)
      .then(function () {
        alert(`Enviamos um e-mail para ${values.email} para resetar sua senha!`);
        navigation.goBack();
      }).catch(function (error) {
        alert(getMessageByErrorCode(error.code))
      }).then(() => setLoading(false))
  }

  const resetPasswordFormSchema = Yup.object().shape({
    email: Yup.string().required('E-mail é obrigatório!').email('Digite um email válido!'),
  });

  return (
    <Container>
      <Spinner
        visible={loading}
        textContent='Carregando...'
        textStyle={{ color: "#fff" }}
      />
      <Message>Digite seu e-mail para enviarmos um e-mail de redefinição de senha</Message>
      <Formik
        validationSchema={resetPasswordFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: '',
        }}
        onSubmit={(values) => forgotPassword(values)}
      >
        {({ values, setFieldValue, handleSubmit, errors, validateField }: FormProps) => (
          <>
            <Input 
              disabled={loading}
              error={errors.email}
              placeholder={errors.email || "E-mail ou RA"}
              value={values.email} 
              onChangeText={(text: string) => setFieldValue('email', text)}
              onBlur={() => validateField('email')}
            />
            <Button type="primary" onPress={() => handleSubmit(values)}>Enviar</Button>
          </>
        )}
      </Formik>
    </Container>
  )
}

export default ForgotPassword;