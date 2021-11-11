import React from 'react';

import { AuthProvider } from './Auth';
import { StepsProvider } from './Steps';
import { GroupSelectProvider } from './GroupsSelect';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <GroupSelectProvider>
          <StepsProvider>{children}</StepsProvider>
        </GroupSelectProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;