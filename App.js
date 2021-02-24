// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Login from './screens/login.js';

export default function App() {
  return (
    <Login/>
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
