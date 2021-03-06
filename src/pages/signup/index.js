import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { blackish, orangeish } from '../../color/Color'
import { logo } from '../../assets'
import { signUp } from '../../controller/loginController'

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
            <ScrollView
                enableOnAndroid={true}
                scrollEnabled={true}
                enableAutomaticScroll={true}
                contentContainerStyle={{ paddingTop: 10 }}
            >
                <View style={styles.background}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.judul}>DESSERT CAMP</Text>
                <Text style={styles.textHeadline}>Register</Text>
                <View style={styles.inputView}>
                    <View style={styles.textInputView}>

                        <TextInput style={styles.textInput}
                            placeholder="Enter Email"
                            placeholderTextColor={blackish}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.textInputView}>

                        <TextInput style={styles.textInput}
                            placeholder="Enter password"
                            placeholderTextColor={blackish}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        />
                        <View style={styles.twoside}>
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
                </View>
                </View>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc2b4'

    },
    logo: {
        marginTop: 50,
        height: 200,
        width: 200
    },
    judul: {
        marginTop: 10,
        marginBottom: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffc2b4',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    textInput: {
        width: 300,
        height: 50,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#000',
        margin: 10,
        textAlign: 'center'
    },
    textForInput: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: "600"
    },
    textHeadline: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: "700",
        margin: 10
    },
    loginView: {
        margin: 10,
        backgroundColor: blackish,
        width: 100,
        height: 55,
        borderWidth: 3,
        borderRadius: 25,
        alignSelf: 'center'
    },
    textHeadlineTwo: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: "700",
        margin: 10,
        color: "white"
    },
    twoside:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    header: {
        // flex : 0.2,
        width: "100%",

    },
    footer: {
        // flex : 0.2,
        width: "100%"
    }
});
