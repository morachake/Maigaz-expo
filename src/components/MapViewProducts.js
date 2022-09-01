import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { COLORS, IMAGES } from "../constants/Index";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { setIsLocationChoosen } from "../store/slices/mapSlice";

export default function MapViewProducts() {
  const dispatch = useDispatch();
  const hideMapViewProducts = () => {
    dispatch(setIsLocationChoosen(false));
  };
  return (
    <View
      style={tw`flex-1 bg-white p-3 rounded-tl-3xl rounded-tr-3xl shadow-2xl`}
    >
      <View>
        <View style={tw`-top-2`}>
          <TouchableOpacity onPress={hideMapViewProducts}>
            <Icon
              name="chevron-down"
              type="font-awesome-5"
              color="black"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <Text style={tw`text-center text-lg mb-3`}>City: Mombasa</Text>
      </View>
      <View style={tw`flex-row ml-4 flex-wrap shrink-0`}>
        <View style={tw`mx-2 border-2 my-2 border-gray-200 p-3 rounded-2xl items-center`}>
          <Image
            resizeMode="contain"
            source={IMAGES.gas}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <View style={tw`my-1`}>
            <Text>Vendor: Haile Saile</Text>
          </View>
          <Text>13kg Gas Cylinder</Text>
          <TouchableOpacity style={tw`py-2 bg-[#3F38CB] px-3 rounded-3xl my-2`}>
            <Text style={tw`text-white`}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
