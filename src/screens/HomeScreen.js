import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import BottomNav from "../components/BottomNav";
import CartView from "../components/CartView";
import FavoriteView from "../components/FavoriteView";
import ProfileView from "../components/ProfileView";


export default function HomeScreen ({ navigation })  {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>

        <Stack.Screen
          name="HomeComponent"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CartView" component={CartView} options={{ headerShown: false }} />
      <Stack.Screen name="FavoriteView" component={FavoriteView} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileView" component={ProfileView} options={{ headerShown: false }} />
          {/* <Stack.Screen name="HomeComponent" component={BottomTabs} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </>
  )
}

const styles = StyleSheet.create({})