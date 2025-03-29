import * as React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './LandingPage';
import TextInputBox from "./TextInputBox"; // adjust path as needed

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage}></Stack.Screen>
        <Stack.Screen name="TextInputBox" component={TextInputBox}></Stack.Screen>
    </Stack.Navigator>
  );
}


