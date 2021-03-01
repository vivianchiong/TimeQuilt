// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
//import 'firebase/firestore';
//import 'firebase/auth';
import apiKeys from './config/keys';
import CreatePost from './screens/createpost';
import Login from './screens/login.js';
import Home from './screens/home.js';
import CreatePost from './screens/createpost.js';
import LookThru from './screens/lookthru.js';

export default function App() {

  // To make sure we are not running a firebase instance at the moment
  if (firebase.apps.length === 0) {
    console.log('Connected with Firebase!');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
