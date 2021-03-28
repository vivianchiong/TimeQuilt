import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {updateDescriptionDB} from '../api/firebaseMethods';
import {addPicDB, addPicToUser, deletePicDB, deleteUserPic, openImagePickerAsync} from '../api/firebaseMethods';

export default function CreatePost({route, navigation}) {
  const {dayNum, picDate, picMoment} = route.params;
  const [image, setImage] = useState(null);
  const [descrip, setDescription] = useState('');
  const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
  const picDay = weekdays[dayNum];

  const changeHandler = (val) => {
    setDescription(val);
  }

  const handleSubmitPress = () => {
    alert('Submit Clicked!');
    if (image === null) {
      alert('Submit a image before updating the description!');
      return;
    }
    updateDescriptionDB(image.id, descrip);
    navigation.pop();
  };

  const handlePicPress = async () => {
    let result = await openImagePickerAsync();

    if (result.cancelled !== true) {
      // if user already has an image for that day, delete it from storage and user's pics[] before adding new pic
      if (image !== null) {
        deletePicDB(image.id);
        deleteUserPic(image.id);
        setDescription('');
        setImage(null);
      }
      let picID = await addPicDB(result.uri, dayNum);
      setImage({ id: picID, uri: result.uri }); // store away the picked image's db picID and uri
      await addPicToUser(picID);
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex:1, backgroundColor:"#005457"}} enableOnAndroid={true} viewIsInsideTabBar={true}>
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.titleDay}>{picDay}</Text>
        <Text style={styles.titleDate}>{picDate}</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={handlePicPress}>
          {
            image === null
            ? <Image style={styles.image} source={require('../assets/cat.jpg')} />
            : <Image source={{ uri: image.uri }} style={styles.image}/>
          }
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder=' Say Something Special...'
          multiline={true}
          numberOfLines={4}
          onChangeText={changeHandler}
          value={descrip}
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
  image: {
    flex: 1,
    marginBottom: 25,
    width: '80%',
    resizeMode: 'contain',
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
  imageContainer:{
    width: 420,
    height: 355,
    justifyContent: "center",
    alignItems: "center",

  }
});