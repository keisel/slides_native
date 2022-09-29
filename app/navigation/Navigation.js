import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreens from '../screens/HomeScreens';
import SlidesScreens from '../screens/SlidesScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
        screenOptions={{headerShown:false}}
    >
        < Stack.Screen name="Home" component={HomeScreens} />
        < Stack.Screen name="Slide" component={SlidesScreens} />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})