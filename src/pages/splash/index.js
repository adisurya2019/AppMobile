import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { logo } from '../../assets'

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Food Camp');
        }, 3000)
    }, [navigation]);

    return (
       <View  style={styles.background}>
           <Image source={logo} style={styles.logo} />
       </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc2b4'
        
    },
    logo: {
        height: 200,
        width: 200
    }
})
