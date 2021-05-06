import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollableTabView, ScrollView } from 'react-native'
import { color } from 'react-native-reanimated';
import { imgHeader } from '../../assets/';
import { KategoriDessert, KategoriDrink, SaldoComponent } from '../../components';

class Home extends Component {
    render(){
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground source={imgHeader} style={styles.header}>
                    <Text style={styles.text}>
                        DESSERT CAMP
                    </Text>
                    <Text style={styles.saldo}>Saldo</Text>
                    <Text style={styles.uang}>Rp. 100.000</Text>
                </ImageBackground>
                <View style={{padding:10}}>
                    <Text style={{color: 'white'}}>.</Text>
                </View>
            </View>
            <SaldoComponent />
            <View style={{padding:5}}>
                    <Text style={{color: 'white'}}>.</Text>
            </View>
            <ScrollView>
                <KategoriDessert onPress={()=> this.props.navigation.navigate('Dessert')} />
                <KategoriDrink onPress={()=> this.props.navigation.navigate('Drink')} />
            </ScrollView>
        </View>
    )
    }
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
        fontSize: 16,
        color: 'white',
        marginLeft: 15,
        marginTop: 5
    },
    uang: {
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
        fontWeight: 'bold'
    },
    
});
