import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import BottomNav from "../components/BottomNav";
import CartView from "../components/CartView";
import FavoriteView from "../components/FavoriteView";
import ProfileView from "../components/ProfileView";
<<<<<<< HEAD
import React from "react";

export default function HomeScreen({ navigation }) {
=======


export default function HomeScreen ({ navigation })  {
>>>>>>> 40accff6921ec0b92d6be3972b2e59d2d7b90ce9
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeComponent"
          component={Home}
          options={{ headerShown: false }}
        />
<<<<<<< HEAD
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
=======
        <Stack.Screen name="CartView" component={CartView} options={{ headerShown: false }} />
      <Stack.Screen name="FavoriteView" component={FavoriteView} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileView" component={ProfileView} options={{ headerShown: false }} />
          {/* <Stack.Screen name="HomeComponent" component={BottomTabs} options={{ headerShown: false }} /> */}
>>>>>>> 40accff6921ec0b92d6be3972b2e59d2d7b90ce9
      </Stack.Navigator>
    </>
<<<<<<< HEAD
  );
}

const styles = StyleSheet.create({});
=======
  )
}

const styles = StyleSheet.create({})
>>>>>>> 40accff6921ec0b92d6be3972b2e59d2d7b90ce9
