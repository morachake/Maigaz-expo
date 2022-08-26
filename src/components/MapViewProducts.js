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
    dispatch(setIsLocationChoosen(false))
  }
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
      <View style={tw`flex-row justify-center`}>
        <Image
          resizeMode="contain"
          source={IMAGES.gas}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <View>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`mr-3`}>13kg Gas Cylinder</Text>
            <TouchableOpacity>
              <Icon
                name="heart-plus-outline"
                type="material-community"
                color="black"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row justify-evenly`}>
            <TouchableOpacity>
              <Icon
                name="minus"
                type="material-community"
                color="black"
                size={25}
              />
            </TouchableOpacity>
            <Text style={tw`mr-3`}>10</Text>
            <TouchableOpacity>
              <Icon
                name="plus"
                type="material-community"
                color="black"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
