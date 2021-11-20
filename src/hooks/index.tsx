import React from 'react';

import { AuthProvider } from './Auth';
import { StepsProvider } from './Steps';
import { GroupSelectProvider } from './GroupsSelect';
import { ConfirmationModalProvider } from './ConfirmationModal';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <GroupSelectProvider>
          <ConfirmationModalProvider>
            <StepsProvider>{children}</StepsProvider>
          </ConfirmationModalProvider>
        </GroupSelectProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;