import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Message, Container } from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Message>Digite seu e-mail para enviarmos um e-mail de redefinição de senha</Message>
      <Input placeholder="Digite seu e-mail"/>
      <Button type="primary" onPress={() => {}}>Enviar</Button>
    </Container>
  )
}

export default ForgotPassword;