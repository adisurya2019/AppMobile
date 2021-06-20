import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {blackish, orangeish} from '../../colors/Color'

import {signUp} from '../../controller/loginController'

export default function SignUpPage({ navigation }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const nosePressed = () => {
    signUp(email, password, signUpComplete)
  }

  const signUpComplete = () => {
    navigation.navigate("WelcomePage")
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
            enableOnAndroid={true}
            scrollEnabled={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{paddingTop : 10}}
            >
      <Text style={styles.textHeadline}>Sign up</Text>
        <View style={styles.inputView}>
            <View style={styles.textInputView}>
                <Text style={styles.textForInput}>Email</Text>
                <TextInput  style={styles.textInput} 
                            placeholder="Enter Email" 
                            placeholderTextColor={blackish}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.textForInput}>Password</Text>
                <TextInput  style={styles.textInput} 
                            placeholder="Enter password" 
                            placeholderTextColor={blackish}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            />
                <TouchableOpacity onPress={nosePressed}>
                    <View style={styles.loginView}>
                    <Text style={styles.textHeadlineTwo}>SignIn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.loginView}>
                    <Text style={styles.textHeadlineTwo}>Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  textForInput : {
      fontSize : 20,
      alignSelf : 'center',
      fontWeight : "600"
  },
  textHeadline : {
    fontSize : 30,
    alignSelf : 'center',
    fontWeight : "700", 
    margin : 10
},
loginView : {
    margin: 10,
    backgroundColor : blackish,
    width : 100,
    height : 55,
    borderWidth : 3,
    borderColor : orangeish,
    borderRadius : 25,
    alignSelf : 'center'
}  ,
textHeadlineTwo : {
    fontSize : 20,
    alignSelf : 'center',
    fontWeight : "700", 
    margin : 10,
    color:"white"
}, 
  header : {
    // flex : 0.2,
    width : "100%",

  },
  footer : {
    // flex : 0.2,
    width : "100%"
  }
});
