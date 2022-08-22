import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import NewProduct from "../screens/seller/Index";

const Stack = createNativeStackNavigator();

export default function MainNavigation () {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainAplication" component={BottomTabs} />
        </Stack.Navigator>
    )
}