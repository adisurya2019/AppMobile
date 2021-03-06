import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View, Alert, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const detailDrink = props => {
    const [data, setData] = useState();
    //did mount
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/indrawerdisanjaya/mockjson2/posts')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={styles.card_container}>
                        <Image style={styles.image}
                            source={{ uri: item.image }} />
                        <View style={styles.konten}>
                            <Text style={styles.teks_container}>{item.title}</Text>
                            <Text style={styles.teks_harga}>{item.price}</Text>
                            <View style={styles.cart}>
                                <TouchableOpacity onPress={() => Alert.alert('Pesanan ditambahkan ke keranjang')}>
                                    <Text>ADD TO CART</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default detailDrink

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card_container: {
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
    tombol: {
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
    konten: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    teks_container: {
        marginTop: 30,
        alignItems: 'center',
        fontWeight: 'bold',
        top: -15,
        marginLeft: 15,
        left: 15
    },
    teks_harga: {
        top: -15,
        marginLeft: 0,
        margin: 10,

    },
    cart: {
        top: -15,
        padding: 8,
        width: 130,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        left: 20,
    }
})
