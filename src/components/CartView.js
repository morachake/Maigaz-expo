import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "../constants/Index";
import { Icon } from "@rneui/themed";

const CartView = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <SafeAreaView style={tw`flex-1 bg-[#E5E5E5]`}>
      <Text style={tw`my-3 text-center text-2xl`}>My Cart</Text>
      <ScrollView>
        <View style={tw`p-5`}>
          <View style={tw`flex-row items-center justify-center`}>
            <Image
              resizeMode="contain"
              source={IMAGES.gas}
              style={{
                width: 100,
                height: 100,
              }}
            />
            <View>
              <Text style={tw`text-lg`}>13 Kg Gas Cylinder</Text>
              <Text style={tw`text-lg`}>Ksh 2000</Text>
              <View style={tw`flex-row items-center justify-between my-2`}>
                <TouchableOpacity style={tw`bg-[#3F38CB] p-1 rounded-full`}>
                  <Icon
                    name="minus"
                    type="font-awesome-5"
                    color="white"
                    size={20}
                  />
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={tw`bg-[#3F38CB] p-1 rounded-full`}>
                  <Icon
                    name="plus"
                    type="font-awesome-5"
                    color="white"
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartView;

const styles = StyleSheet.create({});
