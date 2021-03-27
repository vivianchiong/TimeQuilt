import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Login from '../screens/login.js';
import Home from '../screens/home.js';
import CreatePost from '../screens/createpost.js';
import LookThru from '../screens/lookthru.js';
import Opening from '../screens/opening.js';
import SignUp from '../screens/signup';
import Album from '../screens/album';
import Settings from '../screens/settings'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            return <FontAwesome name={iconName} size={35} color={color} />;
          } else if (route.name === 'Album') {
            iconName = 'images';
            return <FontAwesome5 name={iconName} size={30} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            return <MaterialIcons name={iconName} size={33} color={color} />;
          } 
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: '#C8FFF4',
        showLabel: false,
        style: {
          borderTopWidth: 1.5,
          borderTopColor: '#00B3A6',
          height: '9%',
          backgroundColor: '#00B3A6'}
      }} 
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Album" component={Album} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}


export default function MainStackNavigator() {
    return (
     <NavigationContainer>
      <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen
          name='Opening'
          component={Opening}
          options={{ title: 'Opening' }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ title: 'SignUp' }}
        />
        <Stack.Screen
          name='Home'
          component={MainTabNavigator}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='CreatePost'
          component={CreatePost}
          options={{ title: 'CreatePost' }}
        />
        <Stack.Screen
          name='LookThru' 
          component={LookThru}
          options={{ title: 'LookThru' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    )
  }