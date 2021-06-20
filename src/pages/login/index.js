import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { logo } from '../../assets'
import {blackish, orangeish} from '../../color/Color'
import {login, subscribeToAuth} from '../../controller/loginController'

export default function Login () {

    return (
        <ScrollView>
        <View style={styles.background}>
            <View style={styles.logoparent}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.judul}>DESSERT CAMP</Text>
                </View>
                <View>
                    <Text style={styles.textHeadline}>Login To App</Text>
                    <View style={styles.inputView}>
                        <View style={styles.textInputView}>
                            <Text style={styles.textForInput}>Email</Text>
                            <TextInput style={styles.textInput}
                                placeholder="Enter Email"
                                placeholderTextColor={blackish}
                                //value={email}
                                //onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <Text style={styles.textForInput}>Password</Text>
                            <TextInput style={styles.textInput}
                                placeholder="Enter password"
                                placeholderTextColor={blackish}
                               // value={password}
                                //onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity onPress="">
                                <View style={styles.loginView}>
                                    <Text style={styles.textHeadlineTwo}>SignIn</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                <View style={styles.loginView}>
                                    <Text style={styles.textHeadlineTwo}>SignUp</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            

        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffc2b4'

    },
    logoparent: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
    },
    logo: {

        height: 200,
        width: 200
    },
    judul: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
    
      textInput: {
          width : 300,
          height: 50,
          borderWidth: 1.5,
          borderRadius : 20,
          borderColor : 'black',
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
    }
})
