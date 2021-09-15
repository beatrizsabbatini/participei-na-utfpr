import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const { Navigator, Screen } = createStackNavigator();

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export const AuthRoutes = () => {
  return(
    <Navigator headerMode="none">
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUp"
        component={SignUp}
      />
    </Navigator>
  )
}

export default AuthRoutes;