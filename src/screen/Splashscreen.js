import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Splashscreen() {

   
  return (
    <View style={{flex:1, backgroundColor:"#FF3A44",justifyContent:"center",}}>
      <Image
        style={{height:110,width:280,alignSelf:"center"}}
        source={require('../assests/splashlogo.png')}
      />
    </View>
  )
}