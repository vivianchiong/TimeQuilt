import React, {Component} from 'react';
import {  Text, Image, View, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import Logo from '../assets/logo1.jpg'


class Opening extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 2200);

    const{LogoAnime, LogoText} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
      toValue: 1,
      tension:10,
      friction:2,
      duration:1000,
      useNativeDriver: false
    }).start(),

    Animated.timing(LogoText, {
      toValue:1,
      duration:1200,
      useNativeDriver: false
    }),
  ]).start(()=>{
    this.setState({
      loadingSpinner:true,
    });
  });
  }

  render(){
  return (
    <View style={styles.container}>
      <Animated.View style={{
        opacity: this.state.LogoAnime,
        top:this.state.LogoAnime.interpolate({
          inputRange: [0,1],
          outputRange:[80,0]
        })
      }}>
        <Image 
      source={Logo}
      style = {styles.logo}
      />

      {this.state.loadingSpinner ?( <ActivityIndicator style={{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center',
      }}
      size='large'
      color='#5257f2'
      />
    
      ): null}
      </Animated.View>
      <Animated.View style={{opacity: this.state.LogoText}}>
        <Text style={styles.logoText}>Loading...</Text>
      </Animated.View>
    </View>
  );
  }
}

export default Opening;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#005456',
    justifyContent:'center', 
    alignItems:'center',
  },

  logoText:{
    color:'#ffffff', 
    fontSize:30,
    fontFamily:'Rosarivo',
    marginTop:29.1,
    fontWeight:'900'
  },

  logo:{
    height:150,
    width:150,
    resizeMode:'cover',
    borderRadius:20
  },
})