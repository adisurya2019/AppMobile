import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const index = () => {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.kategori}>MENU</Text>
            </View>
            <View style={styles.flatlist}>
                <FlatList 
                
                />
                <Text> ini drink</Text>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        position: 'absolute',
        padding: 17,
        top: -40,
        left: 50,
        right: 50,
        elevation: 10,
        backgroundColor: '#ffffff',
        borderRadius: 35,
        height: 65,
        shadowColor: '#7f5df0',
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    kategori: {
        justifyContent: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    },
    flatlist:{
        flex: 1,
        top: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
