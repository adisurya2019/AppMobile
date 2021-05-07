import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Splash, Akun, Pesanan, detailDessert, detailDrink} from '../pages';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 14,
                left: 30,
                right: 30,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 35,
                height: 60,
                shadowColor: '#7f5df0',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
            }
            }}>
            <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                        <Image 
                            source={require('../assets/images/home.png')}
                            resizeMode= 'contain'
                            style={[styles.tabicon,{tintColor: focused ? '#ff797e' : 'grey'}]}
                        />
                        <Text style={[styles.text, {color: focused ? '#ff797e' : 'grey'}]}>
                            BERANDA
                        </Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Favorit" component={Pesanan} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                        <Image 
                            source={require('../assets/images/cart.png')}
                            resizeMode= 'contain'
                            style={[styles.tabicon,{tintColor: focused ? '#ff797e' : 'grey'}]}
                        />
                        <Text style={[styles.text, {color: focused ? '#ff797e' : 'grey'}]}>
                            KERANJANG
                        </Text>
                    </View>
                )
            }} 
            />
            <Tab.Screen name="Akun" component={Akun} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                        <Image 
                            source={require('../assets/images/profil.png')}
                            resizeMode="contain"
                            style={[styles.tabicon,{tintColor: focused ? '#ff797e' : 'grey'}]}
                        />
                       <Text style={[styles.text, {color: focused ? '#ff797e' : 'grey'}]}>
                            AKUN
                        </Text>
                    </View>
                )
            }} 
            />
      </Tab.Navigator>
    )
}

const Router = () => {
    return (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Food Camp" component={MainApp} options={{headerShown: false,}} />
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Dessert" component={detailDessert} />
        <Stack.Screen name="Drink" component={detailDrink} />
     </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tabicon:{
        width : 25,
        height: 25
      },
      text:{
          fontSize: 12
      }
})
