import React from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollableTabView } from 'react-native'
import { imgHeader } from '../../assets/';
import { Kategori } from '../../components';

const Home = () => {
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground source={imgHeader} style={styles.header}>
                    <Text style={styles.text}>
                        DESSERT CAMP
                    </Text>
                    <Text style={styles.subtext}>Dessert and drink!</Text>
                    <Text style={styles.saldo}>SISA SALDO :</Text>
                    <Text style={styles.uang}>Rp. 250.000</Text>
                </ImageBackground>
            </View>
            <Kategori />
        </View>
    )
}

export default Home

const windowWidht = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    header: {
        width: windowWidht,
        height: windowHeight*0.25
    },
    text: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 17,
        marginLeft: 15
    },
    subtext:{
        fontSize: 20,
        color: 'white',
        marginLeft: 15
    },
    saldo:{
        fontSize: 14,
        color: 'white',
        marginLeft: 270,
        marginTop: 12.5
    },
    uang: {
        fontSize: 16,
        color: 'white',
        marginLeft:300,
        fontWeight: 'bold'
    }
});
