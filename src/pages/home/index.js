import React from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollableTabView } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
                <ImageBackground
                    source={require("../../assets/images/header.png")}
                    style={styles.imageBackground}
                    resizeMode="contain">
                <Text style={styles.title}>FOOD CAMP</Text>
                </ImageBackground>
          </View>
        </View>
    )
}

export default Home

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
      },
      header: {
        marginTop:0,
        position:'absolute'
      },
      tabbar: {
        flex:1,
        marginTop: width*0.3,
        paddingHorizontal:30
      },
      imageBackground: {
        width: width*0.55,
        height: width*0.55,
        alignItems:'center'
      },
      title: {
        color:'white',
        marginLeft: 20,
        marginTop:25,
        fontWeight:'bold',
        fontSize:25
  }
});
