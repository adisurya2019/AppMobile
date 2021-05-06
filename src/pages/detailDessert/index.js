import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
                    <View style={styles.cart}> 
                        <TouchableOpacity onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang') }>
                            <Text>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View style={styles.konten}>
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <View style={styles.cart}> 
                        <TouchableOpacity onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang') }>
                            <Text>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View style={styles.konten}>
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <View style={styles.cart}> 
                        <TouchableOpacity onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang') }>
                            <Text>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View style={styles.konten}>
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <View style={styles.cart}> 
                        <TouchableOpacity onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang') }>
                            <Text>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View style={styles.konten}>
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <View style={styles.cart}> 
                        <TouchableOpacity onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang') }>
                            <Text>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.card_container}>
                <Image 
                    source={require('../../assets/produk/dessert.png')}
                    style={styles.image}
                />
                <View style={styles.konten}>
                    <Text style={styles.teks_container}>Dessert Satu</Text>
                    <Text style={styles.teks_harga}>Rp. 15.000</Text>
                    <View style={styles.cart}> 
                        <TouchableOpacity onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang') }>
                            <Text>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
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
        paddingVertical: 10,
        paddingHorizontal: 65,
        borderRadius: 30,
        backgroundColor: 'pink',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        
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
        borderColor: 'white',
        top: -10
    },
    konten:{
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    teks_container:{
        marginTop: 30,
        alignItems: 'baseline',
        fontWeight: 'bold',
        top: -15
    },
    teks_harga: {
        top: -15,
        marginLeft:0,
        margin: 10
    },
    cart:{
        top: -15,
        padding: 8,
        width: 130, 
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        left: 30,
    }
})
