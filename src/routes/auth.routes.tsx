import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return(
    <Navigator headerMode="none">
      <Screen
        name="Sign In"
        component={SignIn}
      />
    </Navigator>
  )
}

export default AuthRoutes;