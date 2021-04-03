import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { Octicons } from "@expo/vector-icons";


const Settings = ({navigation})=>{
  
    const handleSignOutPress = () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Opening'}],
      });
    }
  
    return(
      <View style = {styles.container}>
    
    <Image
        source={require('../assets/logo1.jpg')}
        style = {styles.logo}
      />

        <TouchableOpacity style={styles.aboutUsButton} >
            <Text style={styles.signOutTxt}>Login Info</Text>
            <Octicons name="person" size={35} style={{marginTop:'4%'}} color='#C8FFF4'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountButton} >
            <Text style={styles.signOutTxt}>About Us</Text>
            <Octicons name="organization" size={35} style={{marginTop:'4%'}} color='#C8FFF4'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOutPress}>
            <Text style={styles.signOutTxt}>Sign Out</Text>
            <Octicons name="sign-out" size={35} style={{marginTop:'4%'}} color='#C8FFF4'/>
        </TouchableOpacity>

      </View>
    );
  };
  
export default Settings;
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#005456',
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      padding: 10,
    },
    signOutButton:{
      marginTop:30,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 30,
      padding: '5%',
      width: '70%',
      height: '12%',
      backgroundColor:'#00B3A6',
    }, 
    signOutTxt:{
      alignSelf:'center',
      marginTop:5,
      color:'#ffffff',
      fontFamily:'Rosarivo',
      marginLeft: '6%',
      marginRight: '10%',
      fontSize: 20
    },
    aboutUsButton:{
      marginTop:30,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 30,
      padding: '5%',
      width: '70%',
      height: '12%',
      backgroundColor:'#00B3A6',
    }, 
    accountButton:{
      marginTop:30,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 30,
      padding: '5%',
      width: '70%',
      height: '12%',
      backgroundColor:'#00B3A6',
    }, 
    logo:{
      height:150,
      width:150,
      resizeMode:'cover',
      borderRadius:20
    },
  });
  
  
  