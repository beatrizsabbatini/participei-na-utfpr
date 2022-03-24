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
import firebase from 'firebase/app';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import theme from './src/global/styles/theme';
import reactNativePaperTheme from './src/global/styles/reactNativePaperTheme';
import { StatusBar } from 'react-native';
import AppProvider from './src/hooks';
import { firebaseConfig } from './firebase';
import store from './src/store';

const App = () =>{

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  firebase.initializeApp(firebaseConfig);

  

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={reactNativePaperTheme}>
        <AppProvider>
          <Provider store={store}>
              <StatusBar/>
              <Routes />
          </Provider>
        </AppProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;