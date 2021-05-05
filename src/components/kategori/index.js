import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView, TouchableOpacity } from 'react-native'


function Kategori ({ }) {
  return (
    <ScrollView>
    <View style={styles.container}>
     <TouchableOpacity oonPress={() => navigation.navigate("dessertDetail")}>
      <View style={{alignItems: 'center'}} >
        <Image style={styles.image_container} source={require('../../assets/produk/dessert.png')} />
        <Text style={styles.text_container}>Dessert</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity oonPress={() => props.navigation.navigate("dessertDetail")}>
      <View style={{alignItems: 'center', marginTop: -20}}>
        <Image style={styles.image_container} source={require('../../assets/produk/drink.png')} />
        <Text style={styles.text_container}>Drink</Text>
      </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}


 
export default Kategori

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  image_container:{
    borderRadius: 20,
    height: 200,
    width: 300,
  },
  text_container:{
    top: -45,
    fontSize: 20,
    padding: 15,
    borderRadius: 20,
    width: 200,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: 'bold' 
  },
})

