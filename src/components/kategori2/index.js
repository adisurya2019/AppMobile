import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

function KategoriDrink ({ onPress }) {
    return (
      <View style={styles.container}>
      <View style={styles.card} >
          <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}>
              <Image style={styles.image_container} source={require('../../assets/produk/drink.png')} />
              <Text style={styles.text_container}>Drink</Text>
          </TouchableOpacity>
      </View>
     
    </View>
    )
  }

export default KategoriDrink

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    alignItems: "center",
    justifyContent: 'center',
    
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
  card:{
    alignItems: 'center',
    paddingHorizontal: 3,
    height: 220,
    borderRadius: 20,
    backgroundColor : 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 2,
      }
})
