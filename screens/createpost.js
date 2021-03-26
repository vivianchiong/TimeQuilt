import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {updateDescriptionDB} from '../api/firebaseMethods';
import {addPicDB, addPicToUser, deletePicDB, openImagePickerAsync} from '../api/firebaseMethods';


export default function CreatePost({ navigation}) {  // TODO: how to pass in picID??
  const [descrip, setDescription] = useState('');

  const changeHandler = (val) => {
    setDescription(val);
  }

  const handleSubmitPress = () => {
    alert('Submit Clicked!');
    // updateDescriptionDB(picID, descrip);
    navigation.pop();
  };

  const [mondayImage, setMondayImage] = useState(null);

  const handleMondayPress = async () => {
    let result = await openImagePickerAsync();

    if (result.cancelled !== true) {
      // if user already has an image for that day, delete it from storage and user's pics[] before adding new pic
      if (mondayImage !== null) {
        deletePicDB(mondayImage.id);
      }
      let picID = await addPicDB(result.uri, 0);
      setMondayImage({ id: picID, uri: result.uri }); // store away the picked image's db picID and uri
      // addPicToUser(picID); commenting out for now bc we don't have navigation and currentUser being preserved yet
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex:1, backgroundColor:"#005457"}} enableOnAndroid={true} viewIsInsideTabBar={true}>
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.titleDay}>Monday</Text>
        <Text style={styles.titleDate}>02/07/2021</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={handleMondayPress}>
          <Image style={styles.image} source={require('../assets/ImagePlaceholder.jpg')} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder=' Say Something Special...'
          multiline={true}
          numberOfLines={4}
          onChangeText={changeHandler}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmitPress}>
          <Text style={styles.buttontext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
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
    marginTop: '11%',
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  titleDate: {
    marginBottom: 50,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Rosarivo',
  },
  imageContainer:{
    width: 420,
    height: 355,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'contain',
  },
  image: {
    flex: 1,
    marginBottom: 25,
    resizeMode: 'contain',
    maxWidth: 330,
    maxHeight: 350
    
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
