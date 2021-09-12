import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/auth';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return(
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes/> : <AuthRoutes/>}
    </NavigationContainer>
  )

}

export default Routes;