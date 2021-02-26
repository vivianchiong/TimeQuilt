// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
//import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXKWZz2UUr8Y7JEe_3OUA4Bb4vdlE3los",
  authDomain: "timequilt2021.firebaseapp.com",
  databaseURL: "https://timequilt2021-default-rtdb.firebaseio.com",
  projectId: "timequilt2021",
  storageBucket: "timequilt2021.appspot.com",
  messagingSenderId: "268898391671",
  appId: "1:268898391671:web:171a7aa73ff5cc71d29872"
};

// To make sure we are not running a firebase instance at the moment
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
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
