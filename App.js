// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './screens/home.js';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const getFonts=()=> Font.loadAsync({
    'Rosarivo-Regular':require('./assets/fonts/Rosarivo-Regular.ttf'),
    'Rosarivo-italic' : require('./assets/fonts/Rosarivo-Italic.ttf')
  });

export default function App() {
  const [fontsloaded,setFontsLoaded] = useState(false);

  if(fontsloaded, setFontsLoaded){
    return (
      <Home/>
    );
  }else{
    return (<AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
    />)
  }
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
