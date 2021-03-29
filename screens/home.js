import React from 'react';
import { Text, View , Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useState} from "react";
import { FontAwesome } from "@expo/vector-icons";
import moment from 'moment';

const Home = ({navigation})=>{

  let monday = moment().startOf('isoweek');
  let sunday = moment().startOf('isoweek').add(6, 'days');
  let mondayDate = (monday.month()+1) + '/' + monday.date() + '/' + monday.year(); // m-d-y format: march 12 2021 => 3/12/2021
  let sundayDate = (sunday.month()+1) + '/' + sunday.date() + '/' + sunday.year();

  const handleDayPress = (dayNum) => {
    let picMoment = moment().startOf('isoweek').add(dayNum, 'days');
    let picDate = (picMoment.month()+1) + '/' + picMoment.date() + '/' + picMoment.year();
    navigation.navigate('CreatePost', {dayNum: dayNum, picDate: picDate});
  }

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
          {/* {
            mondayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: mondayImage.uri } } style={styles.userPic}/>
          } */<FontAwesome name="plus-circle" size={75} color="#00b4a6"/>}
        </View>
        <Text style={styles.iconBtnTxt}>Monday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(1)}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Tuesday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(2)}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Wednesday</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(3)}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Thursday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(4)}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Friday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(5)}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Saturday</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleDayPress(6)}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
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