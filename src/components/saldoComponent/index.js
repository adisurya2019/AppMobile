import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const SaldoComponent = () => {
    return (
        <View style={styles.container_saldo}>
            <View style={styles.container_dalam}>
                <TouchableOpacity onPress={() => Alert.alert('Fitur Ini Masih Belum Tersedia')}>
                <View style={{alignItems:'center'}}>
                    <Foundation name={'dollar-bill'} size={30} color={'#ff797e'} />
                    <Text style={styles.teks}>Top Up</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Fitur Ini Masih Belum Tersedia')}>
                <View style={{alignItems:'center'}}>
                    <MaterialIcons name={'favorite'} size={30} color={'#ff797e'} />
                    <Text style={styles.teks}>Favorit</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Fitur Ini Masih Belum Tersedia')}>
                <View style={{alignItems:'center'}}>
                    <FontAwesome5 name={'history'} size={30} color={'#ff797e'} />
                    <Text style={styles.teks}>History</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SaldoComponent

const windowWidht = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container_saldo: {
        marginHorizontal: 30,
        backgroundColor: '#ffffff',
        borderRadius: 35,
        padding: 17,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginTop: -windowHeight*0.12,
    },
    container_dalam:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    teks:{
        color: '#ff797e'
    }
})
