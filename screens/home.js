import React from 'react';
import { Text, View , Button, StyleSheet, StatusBar, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {useState} from "react";
import {addPicDB, addPicToUser, deletePicDB, openImagePickerAsync} from '../api/firebaseMethods';
import { FontAwesome } from "@expo/vector-icons";

const Home = ({navigation})=>{
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

  const handleDayPress = () => {
    navigation.navigate('CreatePost');
  }

  return(
    <View style = {styles.container}>
      <View style={styles.overlayContainer}>
        <View style = {styles.top}>
          <Text style={styles.header}>Current Week</Text>
          <Text style={styles.date}>2/08/2021-2/14/2021</Text>
        </View>
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleDayPress}>
        <View style={styles.photoIcon}>
          {
            mondayImage === null
            ? <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
            : <Image source={{ uri: mondayImage.uri } } style={styles.userPic}/>
          }
        </View>
        <Text style={styles.iconBtnTxt}>Monday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleDayPress}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Tuesday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleDayPress}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Wednesday</Text>
        </TouchableOpacity>

      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleDayPress}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Thursday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleDayPress}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Friday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleDayPress}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Saturday</Text>
        </TouchableOpacity>

      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleDayPress}>
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

  userPic:{
    flex:1,
    width:'100%',
    height: '100%',
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








// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       activeColor="#e91e63"
//       barStyle={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={Feed}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }