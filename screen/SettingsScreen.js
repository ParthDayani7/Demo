import {Button, StyleSheet, Text, View, Image, ScrollView} from "react-native"
import React from "react"
import Icon from 'react-native-vector-icons/FontAwesome';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



const SettingsScreen = () => {
  const options = {
    title:'Pick Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };




  const openpicker = async () =>{
     await launchCamera({quality:1},()=>{
      console.log("my data")
    });
    // ImagePicker.showImagePicker(options,(response)=>{
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else {
    //     setImageSource(response.uri);
    //   }
    // });
  };

  
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         
          <Text>Settings!</Text>
          <Button title="Pick Image" onPress={openpicker}/>
        </View>
      );
    }


    export default SettingsScreen


    