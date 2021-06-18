import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { logo } from '../../assets'

const Login = () => {
    
    return (
        <View style={styles.background}>
            <View style={styles.logoparent}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.judul}>DESSERT CAMP</Text>
                <View>

                </View>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffc2b4'

    },
    logoparent: {
        marginTop: 75
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
    }
})
