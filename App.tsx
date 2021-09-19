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
import theme from './src/global/styles/theme';
import reactNativePaperTheme from './src/global/styles/reactNativePaperTheme';
import { StatusBar } from 'react-native';
import AppProvider from './src/hooks';

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
        <AppProvider>
            <StatusBar/>
            <Routes />
        </AppProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;