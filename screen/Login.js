import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Linking} from "react-native"
import React,{useState,} from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./HomeScreen";
import { color } from "react-native-reanimated";
import { SocialIcon } from 'react-native-elements';
import react from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Login({navigation}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 const loginUser =  async () =>{

  const Data = {

    email:email,
    password:password

  }
  try {
    await AsyncStorage.setItem(user,Data);
  } catch (error) {
    
  }
console.log(Data)
 }



  return  (
    <View style={style.container}>
    <View style={style.inputView}>
        <TextInput
          style={style.textinput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          defaultValue={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={style.inputView}>
        <TextInput
          style={style.textinput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          defaultValue={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Button color={'lightblue'} title="Sign In" onPress={loginUser}/>
      <Button color={'lightblue'} title="Sign up" onPress={signup}/>
  </View>
  );
}

function signup({navigation}) {

  return(
    <Text>hi</Text>
  )
}

export default Login
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView:{
    backgroundColor: "lightblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center", 
  },
  textinput:{
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft:20, 

  },
 
})
