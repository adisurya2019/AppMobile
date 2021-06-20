import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {signOut} from '../../controller/loginController'

import {blackish, orangeish} from '../../colors/Color'

export default function WelcomePage({ navigation }) {


    function signedOut(){
        navigation.navigate("StartPage")
    }

  return (
    <View style={styles.container}>
      



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: orangeish,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textInput: {
      width : 300,
      height: 50,
      borderWidth: 1.5,
      borderRadius : 20,
      borderColor : orangeish,
      margin : 20,
      textAlign : 'center'
  },
  image : {
      height: 150,
      width : 350,
      borderRadius : 20,
      borderWidth : 3,

  },
  textHeadline : {
    fontSize : 28,
    alignSelf : 'center',
    fontWeight : "700", 
    color : "white"
},
textBline : {
    fontSize : 28,
    alignSelf : 'center',
    fontWeight : "600", 
    color : orangeish
}, 
imageView : {
    backgroundColor : orangeish,
    padding : 20,
    marginTop : -25
    
}  ,
loginView : {
    backgroundColor : orangeish,
    borderColor: blackish,
    borderWidth: 3,
    borderRadius : 30,
    width: 200 ,
    padding : 5
}, 
textHeadlineTwo : {
    fontSize : 50,
    alignSelf : 'center',
    fontWeight : "700", 
    margin : 10
}, 
addDanceView : {
    backgroundColor : blackish,
    borderColor: orangeish,
    borderWidth: 3,
    borderRadius : 30,
    width: 300 ,
    padding : 5,
    paddingBottom : 20,
    alignItems : 'center'
  },
  footer : {
    marginBottom : -30,
    width : "100%"
  },
  seeDanceMoves : {
      alignItems : 'center',
      backgroundColor : blackish,
      padding: 20,
      width : 500
  }
});
