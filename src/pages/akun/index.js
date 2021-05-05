import React from 'react';
import { StyleSheet,
Text, 
View,
SafeAreaView,
ScrollView,
Image, TouchableOpacity } from 'react-native';


const Akun = () => {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
      <SafeAreaView style={styles.container}>
      <View style={styles.blockprofile}>
      <Text style={styles.judul}>PROFILE</Text>
      </View>
      <View style={styles.userInfoSection}>
      <View style={{flexDirection:'row',marginTop:0}}>
      <View style ={{width: 95, height: 95, backgroundColor: 'pink', borderRadius: 100, marginLeft:0}}></View>
      <Image style={{width: 90, height: 90, borderRadius: 100, borderColor: 'black', marginLeft:-92, marginTop:2.5 }}
        source={require("../../assets/images/man16_118112.jpeg")}
        size={60}
      />
      <View style={{marginLeft:20}}>
        <Text style={[styles.title,{marginTop:20,marginBottom:5}]}>Adi Surya</Text>
        <Text style={styles.caption}>Male</Text>
      </View>
      </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Image style={{width:20, height:20}} source={require("../../assets/images/lokasi.png")}/>
          <Text style={{color:"#393e46", marginLeft: 20}}>Bali, Indonesia</Text>
        </View>
        <View style={styles.row}>
          <Image style={{width:20, height:20}} source={require("../../assets/images/phone.png")}/>
          <Text style={{color:"#393e46", marginLeft: 20}}>081936423816</Text>
        </View>
        <View style={styles.row}>
          <Image style={{width:20, height:20}} source={require("../../assets/images/mail.png")}/>
          <Text style={{color:"#393e46", marginLeft: 20}}>adi_surya@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Text>Rp.100.000</Text>
            <Text>Go Pay</Text>
          </View>
          <View style={styles.infoBox}>
            <Text>0</Text>
            <Text>Orders</Text>
          </View>
      </View>
      </SafeAreaView>
        <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image style={{width:20, height:20,marginTop:5}} source={require("../../assets/images/favorite.png")}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image style={{width:20, height:20,marginTop:5}} source={require("../../assets/images/card.png")}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image style={{width:20, height:20,marginTop:5}} source={require("../../assets/images/send.png")}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image style={{width:20, height:20,marginTop:5}} source={require("../../assets/images/support.png")}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image style={{width:20, height:20,marginTop:5}} source={require("../../assets/images/setting.png")}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
}

export default Akun

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 10,
    marginTop: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 1,
    backgroundColor:'white'
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginLeft:15
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  blockprofile:{
      backgroundColor: "#ff8882", 
      borderRadius:20,
      marginTop:5,
      padding: 10,
      marginHorizontal: 10,
      marginBottom: 10,
      shadowColor: '#7f5df0',
      elevation: 25,
  },
  judul:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        padding:5,
        textAlign:'center'
  }
});
