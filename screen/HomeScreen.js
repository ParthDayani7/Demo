import {Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, BoxContainer} from "react-native"
import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BorderlessButton } from "react-native-gesture-handler";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "react-native-reanimated";


export default function HomeScreen(){

  return (
    <ScrollView>
    <View style={style.container}>
       <Image style={style.Image}
      source={require('../image/Earth.png')} 
  />
      <Text style={style.heading}>World's Capitals!</Text>
      <Text style={{color:"white",fontSize:20}}>1.</Text>
      <Image style={style.Image2}
      source={require('../image/New-Delhi-India-War-Memorial-arch-Sir.png')} 
  />
  <View style={style.b1}>
      <Text style={style.d1}>City - New Delhi </Text>
      <Text style={style.d1}>Capital Of - India</Text>
      <Text style={style.d1}>Population - 17.9 Million</Text>
      </View>

      <Text style={{color:"white",fontSize:20}}>2.</Text>
      <Image style={style.Image2}
      source={require('../image/washington.png')} 
  />
  <View style={style.b1}>
      <Text style={style.d1}>City - washington D.C </Text>
      <Text style={style.d1}>Capital Of - U.S.A</Text>
      <Text style={style.d1}>Population - 5.7 Million</Text>
      </View>
      <View>
    
</View>
      
   
    </View>
    </ScrollView>
  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },

  Image:{
    width: 80, 
    height: 80,
    borderRadius: 40,
    marginTop: 5,
    marginLeft:5,
    position: 'absolute',
  },

  heading:{
    color:"white",
    fontSize:40,
    marginTop:15,
    marginLeft:75,
  },
  text2:{
    color:"black",
    fontSize: 20,
    fontFamily: "Bold"

  },
  Image2:{
    width: 350, 
    height: 200,
    borderRadius: 8,
    marginTop: 20,
    marginLeft:20
  },
  d1:{
    color:"black",
    marginLeft: 10,
    marginRight:10,
    
  },
b1:{
    marginTop:10,
    backgroundColor:"white",
    borderRadius:10,
    marginLeft:20,
    marginRight:20,
}
 
});









