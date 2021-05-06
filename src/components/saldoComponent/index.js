import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const SaldoComponent = () => {
    return (
        <View style={styles.container_saldo}>
            <View style={styles.container_dalam}>
                <Text>Top Up</Text>
                <Text>Favorit</Text>
                <Text>History</Text>
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
        marginTop: -windowHeight*0.145,
    },
    container_dalam:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    }
})
