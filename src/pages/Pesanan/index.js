import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Pesanan = () => {
  const [val, setVal] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My Cart</Text>
      </View>
      <View style={styles.cartCard}>
        <Image source={require("../../assets/produk/box.jpg")} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Dessert Box Oreo</Text>
          <Text style={{ fontSize: 13, color: 'grey' }}>Keterangan</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rp.12000</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{val}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.actionBtn} >
              <TouchableOpacity onPress={()=>{setVal(val+1)}}>
              <Entypo name={'plus'} size={30} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={styles.actionBtn} >
              <TouchableOpacity onPress={()=>{setVal(val-1)}}>
              <Entypo name={'minus'} size={30} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>
            Total Price
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 15 }}>Rp. {val*12000}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>
            Saldo
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 15 }}>Rp.100.000</Text>
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <Button
            title="Payments"
            color="red"
            onPress={() => alert('Fitur ini masih belum tersedia')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Pesanan

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginBottom: 20
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 50,
    height: 30,
    backgroundColor: '#ff8882',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 3,
    marginTop: 6
  },
})
