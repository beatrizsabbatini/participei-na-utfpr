import React from 'react';

import { AuthProvider } from './Auth';
import { StepsProvider } from './Steps';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <StepsProvider>{children}</StepsProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;