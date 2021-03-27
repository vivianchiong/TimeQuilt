import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import FormInput from './loginComponents/formInput';
import FormButton from './loginComponents/FormButton';
import SocialButton from './loginComponents/socialButton';
import {registration} from '../api/firebaseMethods';
import {useState} from "react";

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSignUpPress = () => {
    alert('Sign Up Clicked!');

    if (!email) {
      Alert.alert('Email field is required', 'Please try again!');
    }

    else if (!password) {
      Alert.alert('Password field is required', 'Please try again!');
    }

    else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please try again!');
    }

    registration(email, password);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    navigation.navigate('Home')
  };

  return (
    <View style = {styles.container}>

      <Text style = {styles.text}>Create an Account</Text>
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
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword)=> setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        secureTextEntry={true}
        iconType="lock"
      />

      <View style = {styles.textPrivate}>
        <Text style = {styles.color_textPrivate}>By registering, you confirm that you accept the {' '}</Text>
          <TouchableOpacity onPress={()=> alert('Terms Clicked!')}>
          <Text style = {[styles.color_textPrivate, {color:'#e88832'}]}>Terms of Service</Text>
          </TouchableOpacity>
          <Text style = {styles.color_textPrivate}> and </Text>
          <TouchableOpacity onPress={()=> alert('Privacy Clicked!')}>
          <Text style = {[styles.color_textPrivate, {color:'#e88832'}]}>Privacy Policy</Text>
          </TouchableOpacity>
      </View>

      <FormButton
      buttonTitle="Sign Up"
      onPress={handleSignUpPress}
      />

    <Text style = {{fontSize: 24, color: '#ecf0f1', fontFamily:'Rosarivo'}}>or</Text>

      <SocialButton
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#81ecec"
        onPress={()=>{}}
      />

      <SocialButton
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#4867aa"
        backgroundColor="#fab1a0"
        onPress={()=>{}}
      />

<View style = {styles.textPrivate}>
        
          <TouchableOpacity onPress={()=> alert('Return to Login')}>
          <Text style = {styles.color_textPrivate}>Have an account? Return to Login!</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#005456',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  },

  text:{
    fontSize:30,
    marginBottom:10,
    fontFamily:'Rosarivo',
    color: '#ecf0f1',
    marginTop:29.1,
  },
  navButton:{
    marginTop:15,
  },
  forgotButton:{
    marginVertical:10,
    marginRight:135
  },
  textPrivate:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginVertical: 15,
    justifyContent:'center'
  },
  color_textPrivate:{
    fontSize:13,
    fontWeight: '500',
    color:'#ffff',
    fontFamily:'Rosarivo',
  }
});