import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen"
import NewProduct from "../screens/seller/Index";

const Stack = createNativeStackNavigator();

export default function DashNavigation () {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeComponent" component={HomeScreen}/>
            <Stack.Screen name="addProduct" component={NewProduct} />
        </Stack.Navigator>
    )
}