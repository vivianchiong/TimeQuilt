import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as firebase from 'firebase';
import apiKeys from './config/keys';
import Navigator from './routes/AppNavigator';
import Opening from './screens/opening';


export default function App() {

  // make sure we are not running a firebase instance at the moment
  if (firebase.apps.length === 0) {
    console.log('Connected with Firebase!');
    firebase.initializeApp(apiKeys);
  }

  const [fontsLoaded] = useFonts ({
    'Rosarivo': require('./assets/fonts/Rosarivo-Regular.ttf'),
    'Rosario': require('./assets/fonts/Rosario-VariableFont_wght.ttf')
  })
  if (fontsLoaded) {
    return (
      <Navigator/>
    );
  } else {
    return (
      <AppLoading />
    );
  }
}