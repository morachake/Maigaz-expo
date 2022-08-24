import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home'
import BottomNav from '../components/BottomNav'
import BottomTabs from '../navigation/BottomTabs'

const HomeScreen = () => {
    const Stack = createNativeStackNavigator()
  return (
    <>
      <Stack.Navigator>
          <Stack.Screen name="HomeComponent" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})