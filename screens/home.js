import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import moment from 'moment';
import {getHomePicsDB} from '../api/firebaseMethods';
import * as firebase from "firebase";
import "firebase/auth";

const Home = ({navigation})=>{
  const [mondayImage, setMondayImage] = useState(null);
  const [tuesdayImage, setTuesdayImage] = useState(null);
  const [wednesdayImage, setWednesdayImage] = useState(null);
  const [thursdayImage, setThursdayImage] = useState(null);
  const [fridayImage, setFridayImage] = useState(null);
  const [saturdayImage, setSaturdayImage] = useState(null);
  const [sundayImage, setSundayImage] = useState(null);

  let monday = moment().startOf('isoweek');
  let sunday = moment().startOf('isoweek').add(6, 'days');
  let mondayDate = (monday.month()+1) + '/' + monday.date() + '/' + monday.year(); // m-d-y format: march 12 2021 => 3/12/2021
  let sundayDate = (sunday.month()+1) + '/' + sunday.date() + '/' + sunday.year();

  const handleDayPress = (dayNum) => {
    let picMoment = moment().startOf('isoweek').add(dayNum, 'days');
    let picDate = (picMoment.month()+1) + '/' + picMoment.date() + '/' + picMoment.year();
    navigation.navigate('CreatePost', {dayNum: dayNum, picDate: picDate, picMoment: picMoment.format()});
  }

  // get request for user's pics for current week (if they exist) on page render
  useEffect(() => {
    const getPics = async () => {

      firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {
          // User is signed in.
          const homePics = await getHomePicsDB(); // {0: {id, uri}, .., 6: {id, uri}}
          console.log("home pics: ", homePics)
          if (homePics !== undefined) {
            if (homePics[0] !== null) setMondayImage({ id: homePics[0].id, uri: homePics[0].uri });
            if (homePics[1] !== null) setTuesdayImage({ id: homePics[1].id, uri: homePics[1].uri });
            if (homePics[2] !== null) setWednesdayImage({ id: homePics[2].id, uri: homePics[2].uri });
            if (homePics[3] !== null) setThursdayImage({ id: homePics[3].id, uri: homePics[3].uri });
            if (homePics[4] !== null) setFridayImage({ id: homePics[4].id, uri: homePics[4].uri });
            if (homePics[5] !== null) setSaturdayImage({ id: homePics[5].id, uri: homePics[5].uri });
            if (homePics[6] !== null) setSundayImage({ id: homePics[6].id, uri: homePics[6].uri });
          }
        }
      });
    };
    getPics();
  }, []); // what to put in dependency list so that useEffect gets called everytime we go to Home ????? 
  
  return(
    <View style = {styles.container}>
      <View style={styles.overlayContainer}>
        <View style = {styles.top}>
          <Text style={styles.header}>Current Week</Text>
          <Text style={styles.date}>{mondayDate}-{sundayDate}</Text>
        </View>
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(0)}>
        <View style={styles.photoIcon}>
          {
            mondayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: mondayImage.uri }} style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Monday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(1)}>
        <View style={styles.photoIcon}>
          {
            tuesdayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: tuesdayImage.uri }} style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Tuesday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(2)}>
        <View style={styles.photoIcon}>
          {
            wednesdayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: wednesdayImage.uri }} style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Wednesday</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(3)}>
        <View style={styles.photoIcon}>
          {
            thursdayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: thursdayImage.uri }} style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Thursday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(4)}>
        <View style={styles.photoIcon}>
          {
            fridayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: fridayImage.uri }} style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Friday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(5)}>
        <View style={styles.photoIcon}>
          {
            saturdayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: saturdayImage.uri }} style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Saturday</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(6)}>
        <View style={styles.photoIcon}>
          {
            sundayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: sundayImage.uri }} style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Sunday</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#005456',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
  },

  photoContainer:{
    flexDirection: 'row',
    width:'90%',
    alignSelf:'center',
    marginTop:25,
    marginBottom:10,
  },

  iconButton:{
    flex:1,
    width:'30%',
    marginHorizontal:0,
    alignSelf:'center',
  },

  photoIcon:{
    borderWidth:0,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width: 100,
    height:100,
    backgroundColor:'#ffffff',
    borderRadius:20,
  },

  userPic: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },

  iconBtnTxt:{
    alignSelf:'center',
    marginTop:5,
    color:'#ffffff',
    fontFamily:'Rosarivo'
  },

  top:{
    height:'10%',
    alignItems: 'center',
    justifyContent:'center',
  },

  header:{
    bottom:45,
    color:'#fff',
    fontSize:34,
    padding: 60,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily:'Rosarivo'
  },

  date:{
    bottom:80,
    color:'#fff',
    fontSize:34,
    padding: 40,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily:'Rosarivo'
  },
});