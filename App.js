import React,{useState, useEffect, Component} from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import apiKeys from './config/keys';
import Login from './screens/login.js';
import Home from './screens/home.js';
import CreatePost from './screens/createpost.js';
import LookThru from './screens/lookthru.js';
import Opening from './screens/opening.js';
import SignUp from './screens/signup';

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
      // <Login/>
      <Home/>
      //<CreatePost/>
      //<LookThru/>
      //<Opening/>
      // <SignUp/>
    );
  } else {
    return (
      <AppLoading />
    );
  }
}