import {Button, StyleSheet, Text, View, Image, ScrollView} from "react-native"
import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';




const NotificationScreen = () => {
    return (
    <View style={style.container}>
      <Text>Notification!</Text>
      
    </View>
  );
}

export default NotificationScreen

const style= StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightyellow',
    
  },

});



const container = StyleSheet.compose(style.container);




