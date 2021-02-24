import React, {useState} from 'react';
import{View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from './loginComponents/formInput';
import FormButton from './loginComponents/FormButton';
import SocialButton from './loginComponents/socialButton';

const Login = ({navigation}) =>{
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  return(
    <View style = {styles.container}>
      <Image
        source={require('../assets/logo1.jpg')}
        style = {styles.logo}
      />
      <Text style = {{fontFamily:'Rosarivo-Regular'}} style = {styles.text}>Time Quilt</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail)=> setEmail(userEmail)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword)=> setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
        iconType="user"
      />

  <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style = {styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <FormButton
      buttonTitle="Log In"
      onPress={() => alert('Log In Clicked!')}
      />

      <FormButton
      buttonTitle="Sign Up"
      //onPress={() => {}}  navigate to signup screen
      onPress={() => alert('Sign Up Clicked!')}
      />

    <Text style = {{fontSize: 24, color: '#ecf0f1'}}>or</Text>

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
    resizeMode:'cover'
  },
  text:{
    fontSize:40,
    marginBottom:10,
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
  }
});