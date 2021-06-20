import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Header from './components/header/Header'

import StartPage from "./pages/splash/index"
//import SignUpPage from "./components/SignUp/SignUpPage"
import MainApp from "./pages/home/index"
import Router from "./router/index"
import {detailDessert, detailDrink} from "./pages";
import SignUpPage from "./pages/signup"


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
      <Stack.Screen name="Food Camp" component={MainApp} options={{headerShown: false,}} />
        
        <Stack.Screen name="WelcomePage" component={Router} options={{headerShown: false}} />
        <Stack.Screen name="Dessert" component={detailDessert} />
        <Stack.Screen name="Drink" component={detailDrink} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown: false}} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
