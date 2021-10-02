import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import CustomHeader from '../components/CustomHeader';
import { LEFT_ICON_TYPES, RIGHT_ICON_TYPES } from '../types';

const { Navigator, Screen } = createStackNavigator();

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export const AuthRoutes = () => {
  return(
    <Navigator >
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: () => (
            <CustomHeader 
              title="Criar Conta" 
              leftIconType={LEFT_ICON_TYPES.BACK} 
              rightIconType={RIGHT_ICON_TYPES.NONE}
          />
        )}}
      />
       <Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          header: () => (
            <CustomHeader 
              title="Esqueci minha senha" 
              leftIconType={LEFT_ICON_TYPES.BACK} 
              rightIconType={RIGHT_ICON_TYPES.NONE}
          />
        )}}
      />
    </Navigator>
  )
}

export default AuthRoutes;