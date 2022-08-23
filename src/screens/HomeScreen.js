import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home'

const HomeScreen = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeComponent" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})