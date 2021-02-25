import React from 'react';
import { Text, View , Button, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Home = ({navigation})=>{

  return(
    <View style = {styles.container}>
      <View style={styles.overlayContainer}>
        <View style = {styles.top}>
          <Text style={styles.header}>Current Week</Text> 
          <Text style={styles.date}>2/08/2021-2/14/2021</Text> 
        </View>
      </View>
      
      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Monday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
        <View style={styles.photoIcon}>
          <FontAwesome name="camera-retro" size={55} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Tuesday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
        <View style={styles.photoIcon}>
          <FontAwesome name="image" size={55} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Wednesday</Text>
        </TouchableOpacity>
        
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Thursday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Friday</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
        <View style={styles.photoIcon}>
          <FontAwesome name="plus-circle" size={75} color="#00b4a6"/>
        </View>
        <Text style={styles.iconBtnTxt}>Saturday</Text>
        </TouchableOpacity>
        
      </View>

      <View style = {styles.photoContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
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
    color:'#ffffff'
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
  },

  date:{
    bottom:80,
    color:'#fff',
    fontSize:34,
    padding: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  
});

