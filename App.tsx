import React from 'react';

import Routes from './src/routes';
import { AuthProvider } from './src/hooks/auth';

const App = () =>{

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;