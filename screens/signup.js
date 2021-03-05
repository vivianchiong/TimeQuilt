import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import FormInput from './loginComponents/formInput';
import FormButton from './loginComponents/FormButton';
import {registration} from '../api/firebaseMethods';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handlePress = () => {
    alert('Sign Up Clicked!');

    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!username) {
      Alert.alert('Username field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }

    registration(email, password, username);
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <View style = {styles.container}>
      <Text>SignUp</Text>

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
        labelValue={username}
        onChangeText={(userUsername)=> setUsername(userUsername)}
        placeholderText="Username"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword)=> setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
        iconType="lock"
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={handlePress}
      />

    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#005456',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  }
});