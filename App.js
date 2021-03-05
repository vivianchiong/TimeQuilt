import React,{useState, useEffect, Component} from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login.js';
import Home from './screens/home.js';
import CreatePost from './screens/createpost.js';
import LookThru from './screens/lookthru.js';
import Opening from './screens/opening.js';

export default function App(){
  const [fontsLoaded] = useFonts ({
    'Rosarivo': require('./assets/fonts/Rosarivo-Regular.ttf'),
    'Rosario': require('./assets/fonts/Rosario-VariableFont_wght.ttf')
  })
  
if (fontsLoaded) 
  {
    return (
 
      //<Login/>
      //<Home/>
      //<CreatePost/>
      //<LookThru/>
      <Opening/>
    );
  }
  else {
    return ( 
      <AppLoading />
    )
  } 
}


