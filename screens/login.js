import React, {useState} from 'react';
import{View, Text, TouchableOpacity, Image, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback,} from 'react-native';
import FormInput from './loginComponents/formInput';
import FormButton from './loginComponents/FormButton';
import SocialButton from './loginComponents/socialButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {signIn} from '../api/firebaseMethods';

const Login = ({navigation}) =>{
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  const handleLoginPress = () => {
    alert('Log In Clicked!');
    if (!email) {
      Alert.alert('Email field is required.');
    }
    else if (!password) {
      Alert.alert('Password field is required.');
    }

    signIn(email, password);
    setEmail('');
    setPassword('');
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  const handleSignUpPress = () => {
    alert('Sign Up Clicked!')
    navigation.navigate('SignUp')
  };

  return(
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style = {styles.container}>

      <Image
        source={require('../assets/logo1.jpg')}
        style = {styles.logo}
      />
      <Text style = {styles.text}>Time Quilt</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail)=> setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword)=> setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
        iconType="lock"
      />

  <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style = {styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <FormButton
      buttonTitle="Log In"
      onPress={handleLoginPress}
      />

      <FormButton
      buttonTitle="Sign Up"
      onPress={handleSignUpPress}
      />

    <Text style = {{fontSize: 24, color: '#ecf0f1', fontFamily:'Rosarivo'}}>or</Text>

      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#81ecec"
        onPress={()=>{}}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#4867aa"
        backgroundColor="#fab1a0"
        onPress={()=>{}}
      />

    </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#005456',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  },

  logo:{
    height:150,
    width:150,
    resizeMode:'cover',
    borderRadius:20
  },
  text:{
    fontSize:40,
    marginBottom:10,
    fontFamily:'Rosarivo',
    color: '#ecf0f1',
  },
  navButton:{
    marginTop:15,
  },
  forgotButton:{
    marginVertical:10,
    marginRight:135
  },
  navButtonText:{
    fontSize:18,
    fontWeight:'500',
    color:'white',
    fontFamily:'Rosarivo'
  }
});