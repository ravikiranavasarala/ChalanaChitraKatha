import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StatusBar, Image, Tab, SafeAreaView, Alert, BackHandler, AppState, Linking, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen'
import ScreenName from './Utils/ScreenName'
const Stack = createStackNavigator();


const App = () => {
 
  return (
    
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={ScreenName.SPLASHSCREEN}
        >
          <Stack.Screen name={ScreenName.SPLASHSCREEN} component={SplashScreen} />
        </Stack.Navigator>
        
        

      </NavigationContainer>
  );
}
export default App

