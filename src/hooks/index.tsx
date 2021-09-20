import React from 'react';

import { AuthProvider } from './Auth';
import { StepsProvider } from './Steps';
import { FiltersProvider } from './Filters';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <FiltersProvider>
          <StepsProvider>{children}</StepsProvider>
        </FiltersProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;