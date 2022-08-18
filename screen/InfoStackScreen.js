import { Button, StyleSheet, Text, View, Image, ScrollView } from "react-native"
import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { faRodAsclepius } from "@fortawesome/free-solid-svg-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';





function DetailsScreen({ route, navigation }) {
  
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Information')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}



function InformationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{Item:5 })}s
      />
    </View>
  );
}



const DataStack = createNativeStackNavigator();

function InfoStackScreen() {
  return (
    <DataStack.Navigator>
      <DataStack.Screen name="Information" component={InformationScreen} options={{  headerStyle: {  
            backgroundColor: 'lightblue',  
        },  
    headerRight: () => (
      <Image
        style={{ width: 50, height: 50, margin: 2 }}
      
      />
    ),
  }}
/>
      <DataStack.Screen name="Details" component={DetailsScreen} options={{ headerTitle:(props) => <LogoTitle {...props} />,headerStyle: { backgroundColor: 'lightblue' }}} />
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
