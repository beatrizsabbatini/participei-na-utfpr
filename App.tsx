import React from 'react';

import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

import Routes from './src/routes';
import { AuthProvider } from './src/hooks/auth';
import theme from './src/global/styles/theme';
import reactNativePaperTheme from './src/global/styles/reactNativePaperTheme';
import { StatusBar } from 'react-native';

const App = () =>{

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={reactNativePaperTheme}>
        <AuthProvider>
          <StatusBar barStyle='light-content' />
          <Routes />
        </AuthProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;