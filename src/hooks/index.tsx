import React from 'react';

import { AuthProvider } from './Auth';
import { StepsProvider } from './Steps';
import { GroupSelectProvider } from './GroupsSelect';
import { ConfirmationModalProvider } from './ConfirmationModal';
import { StatisticsModalProvider } from './StatisticsModal';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <GroupSelectProvider>
          <StatisticsModalProvider>
            <ConfirmationModalProvider>
              <StepsProvider>{children}</StepsProvider>
            </ConfirmationModalProvider>
          </StatisticsModalProvider>
        </GroupSelectProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;