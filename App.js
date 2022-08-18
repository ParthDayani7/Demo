import { Button, StyleSheet, Text, View, Image, ScrollView, } from "react-native"
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextAnimationShake } from 'react-native-text-effects';
import page2 from "./screen/page2";
import HomeScreen from "./screen/HomeScreen";
import SettingsScreen from "./screen/SettingsScreen";
import InfoScreen from "./screen/InfoScreen";
import NotificationScreen from "./screen/NotificationScreen";
import ProfileStackScreen from "./screen/ProfileStackScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground } from 'react-native'
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { TouchableOpacity } from 'react-native-gesture-handler';
import InfoStackScreen from "./screen/InfoStackScreen";




const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="home" component={HomeScreen} options={{
          headerTitle: () => ( 
            <Image
            style={{ width: 50, height: 50, margin: 20 }}
            source={require("./image/Earth.png")}
          />
            
          ),
          tabBarIcon: () => (<Icon name="home" size={30} />)
        }}
        />

        <Tab.Screen name="Info" component={InfoStackScreen} options={{
          headerShown: false,

          tabBarIcon: () => (<Icon name="info" size={30} />)
        }}
        />

        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          tabBarIcon: () => (<Icon name="gear" size={30} />)
        }} />
        <Tab.Screen name="Notification" component={NotificationScreen} options={{
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          tabBarIcon: () => (<Icon name="bell" size={30} />)
        }} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} options={{ headerShown: false,
          headerStyle: {
            backgroundColor: 'lightblue',

          },
          headerRight: () => (
            <Image
              style={{ width: 50, height: 50, margin: 2 }}
              source={require("./image/Earth.png")}
            />
          ),
          tabBarIcon: () => (<Icon name="user" size={30} />)


        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',

  },


});
