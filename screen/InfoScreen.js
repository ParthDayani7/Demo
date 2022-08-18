import {Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from "react-native"
import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoStackScreen from "./InfoStackScreen";








const InfoScreen = (navigation) => {

  return (
    
    <View style={style.container}>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info screen</Text>
      <Button
        title="Go to"
        onPress={() => navigation.navigate('Details')}
      />

      
    </View>
      
     

    </View>
  )
}


export default InfoScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightyellow',
      
    },
  
  });
  
  
  
  const container = StyleSheet.compose(style.container);