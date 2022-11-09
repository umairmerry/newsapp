import { View, Text } from 'react-native'
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Favorite from '../screen/Favorite';
import Newsscreen from '../screen/Newsscreen';
import React, { useState, useEffect } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconhome from 'react-native-vector-icons/AntDesign';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splashscreen from '../screen/Splashscreen';

const Drawer = createDrawerNavigator();



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function MyDrawer() {
  return (
    <Drawer.Navigator >

      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}


function Tabb() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: "white",
          
          marginHorizontal: 35,
          marginBottom: 35,
          borderRadius: 40,
          height: 70,
          elevation: 0,

        },
        tabBarItemStyle: {
          
          margin: 12,

        },

        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            return <Iconhome name="home" size={27} color={color} />

          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            return <Ionicons name="heart-outline" size={27} color={color} />
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            return <Icon name="smile-o" size={27} color={color} />
          }

          // You can return any component that you like here!

        },
        tabBarActiveTintColor: '#FF3A44',
        tabBarInactiveTintColor: 'gray',

      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>

  );
}

export default function Nav() {
  const [splsh, setSplsh] = useState(true);


  useEffect(() => {


    setTimeout(() => {
      setSplsh(false)

    }, 2000);
  }, [])

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        {splsh ?
          <Stack.Screen name="Splashscreen" component={Splashscreen} /> : null
        }

        {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}
        <Stack.Screen name="Tabb" component={Tabb} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Newsscreen" component={Newsscreen} />
        <Stack.Screen name="Favorite" component={Favorite} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

