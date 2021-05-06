import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'

const detailDessert = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View style={styles.konten}>
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <Button 
                        title= "Add to Cart"
                        onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang')}
                    />
                </View>
            </View>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View >
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <Button 
                        title= "Add to Cart"
                        onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang')}
                    />
                </View>
            </View>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View >
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <Button 
                        title= "Add to Cart"
                        onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang')}
                    />
                </View>
            </View>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View >
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <Button 
                        title= "Add to Cart"
                        onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang')}
                    />
                </View>
            </View>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View >
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <Button 
                        title= "Add to Cart"
                        onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang')}
                    />
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default detailDessert

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card_container:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 25,
        height: 190,
        paddingHorizontal: 65,
        borderRadius: 30,
        backgroundColor: 'pink',
        borderWidth: 0.5,
        borderColor: 'black'
    },
    tombol:{
        color: 'white'
    },
    image: {
        marginLeft: -30,
        marginRight: 10,
        marginTop: 25,
        height: 125,
        width: 125,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: 'white'
    },
    konten:{
        
    },
    teks_container:{
        marginTop: 30,
        alignItems: 'baseline',
        fontWeight: 'bold'
    },
    teks_harga: {
        marginLeft:0,
        margin: 10
    }
})
