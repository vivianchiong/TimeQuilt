import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {updateDescriptionDB} from '../api/firebaseMethods';

export default function CreatePost() {  // TODO: how to pass in picID??
  const [descrip, setDescription] = useState('');

  const changeHandler = (val) => {
    setDescription(val);
  }

  const handlePress = () => {
    alert('Submit Clicked!');
    updateDescriptionDB(picID, descrip);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.titleDay}>Monday</Text>
        <Text style={styles.titleDate}>02/07/2021</Text>
        <Image style={styles.logo} source={require('../assets/cat.jpg')} />
        <TextInput
          style={styles.input}
          placeholder=' Say Something Special...'
          multiline={true}
          numberOfLines={4}
          onChangeText={changeHandler}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttontext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#005457',
  },
  titleDay: {
    marginTop: 15,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  titleDate: {
    marginBottom: 75,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  logo: {
    flex: 1,
    marginBottom: 25,
    maxWidth: '90%',
    maxHeight: '40%',
  },
  input: {
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 7,
    textAlignVertical: 'top',
    textAlign: 'left',
    color: '#000000',
    fontFamily: 'Rosario',
  },
  button: {
    backgroundColor: '#00B3A6',
    margin: 20,
    marginBottom: -5,
    borderRadius: 10,
    width: '52%',
    height: '7%',
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttontext: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Rosario',
  },
});
