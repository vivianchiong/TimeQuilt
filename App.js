import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import CreatePost from './screens/createpost';
import Login from './screens/login.js';

export default function App() {
  const [fontsLoaded] = useFonts ({
    'Rosarivo': require('./assets/fonts/Rosarivo-Regular.ttf'),
    'Rosario': require('./assets/fonts/Rosario-VariableFont_wght.ttf')
  })
  if (fontsLoaded) {
    return (
      <CreatePost />
    );
  }
  else {
    return ( 
      <AppLoading />
    )
  } 
}
