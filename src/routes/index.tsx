import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/Auth';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log("isAuthenticated Routes", isAuthenticated)
  }, [isAuthenticated])
  

  return(
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes/> : <AuthRoutes/>}
    </NavigationContainer>
  )

}

export default Routes;