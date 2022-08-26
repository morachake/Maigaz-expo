import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../components/HomeView";
import BottomNav from "../components/BottomNav";
import CartView from "../components/CartView";
import FavoriteView from "../components/FavoriteView";
import ProfileView from "../components/ProfileView";
import MapView from "../components/MapView";
import React from "react";
import { useSelector } from "react-redux";
import mapSlice from "../store/slices/mapSlice";

export default function HomeScreen({ navigation }) {
  const isLocationChoosen = useSelector(state => state.map.isLocationChoosen) 
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeComponent"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartView"
          component={CartView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavoriteView"
          component={FavoriteView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileView"
          component={ProfileView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={MapView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      { isLocationChoosen ? (<></>) : <BottomNav navigation={navigation} /> }
    </>
  );
}

const styles = StyleSheet.create({});
