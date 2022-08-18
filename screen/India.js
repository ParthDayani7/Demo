import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Linking } from "react-native"
import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./HomeScreen";
import { color } from "react-native-reanimated";
import { SocialIcon } from 'react-native-elements';




function Login() {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}



function ProfileScreen({ navigation }) {
  

   const facebook = () => {
      Linking.openURL(`https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjYwNzIzMzg1LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D${props.view}`);
    };
    const google = () => {
      Linking.openURL(`https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin${props.view}`);
    };
    const twitter = () => {
      Linking.openURL(`https://twitter.com/i/flow/login?lang=en${props.view}`);
    };
  
  
  
  
    return (
  
  
  
  
  
      <View style={style.container}>
  
        <Image style={style.profile}
          source={require('../image/download.png')}
        />
  
    

<TouchableOpacity  onPress={() => navigation.navigate('Login')}>
<Icon name="user"
          style={{
            position: 'absolute',
            right: 5,
            top: 5,
            fontSize: 25
          }} />

</TouchableOpacity>

<Text
        style={style.input}>User name
      </Text>
      <Text
        style={style.input}>06/01/2002
      </Text>
      <View style={style.logobutton}>

        <View
          style={style.button}></View>
        <TouchableOpacity onPress={facebook}>
          <Icon
            name='facebook'
            size={25}
            color='#3b5998'
            style={{ height: 25, width: 25 }} /></TouchableOpacity>
        <Text style={style.buttonText}>Facebook</Text>


        <View
          style={style.button}></View>
        <TouchableOpacity onPress={google}>
          <Icon
            name='google'
            size={25}
            color='red'
            style={{ height: 25, width: 25 }} /></TouchableOpacity>
        <Text style={style.buttonText}>google</Text>

        <View
          style={style.button}></View>
        <TouchableOpacity onPress={twitter}>
          <Icon
            name='twitter'
            size={25}
            color='lightblue'
            style={{ height: 25, width: 25 }} /></TouchableOpacity>
        <Text style={style.buttonText}>twitter</Text>

      </View>




    </View>
  )
}


const DataStack = createNativeStackNavigator();

function InfoStackScreen() {
  return (
    <DataStack.Navigator>
      <DataStack.Screen name="Profile" component={ProfileScreen} options={{  headerStyle: {  
            backgroundColor: 'lightblue',  
        },  
    headerRight: () => (
      <Image
        style={{ width: 50, height: 50, margin: 2 }}
      
      />
    ),
  }}
/>
      <DataStack.Screen name="Login" component={Login} options={{ headerTitle:(props) => <LogoTitle {...props} />,headerStyle: { backgroundColor: 'lightblue' }}} />
    </DataStack.Navigator>
  );
}



function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
     
    />
  );
  
}





export default InfoStackScreen

const style = StyleSheet.create({
   container: {
     backgroundColor: 'lightyellow',
     height: 100,
 
   },
   profile: {
     backgroundColor: 'blue',
     height: 100,
     width: 100,
     borderRadius: 50,
     alignSelf: "center",
     marginTop: 50
 
   },
 
 
   input: {
     marginRight: 5,
     alignSelf: "center",
     fontWeight: "bold",
   },
   facebook: {
     borderRadius: 50,
     size: 10,
 
   },
 
   logobutton: {
     margin: 20,
     flexDirection: 'row',
     justifyContent: 'space-between',
 
 
   }
 });
 
 
 
 const container = StyleSheet.compose(style.container);