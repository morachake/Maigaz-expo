import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from 'twrnc'
import { Icon } from '@rneui/themed'

const BottomNav = () => {
  return (
    <View
      style={tw`flex-row justify-evenly mt-auto mb-3 bg-white rounded-3xl -mb-1`}
    >
      <TouchableOpacity style={tw`items-center w-24 px-4 py-3 justify-center`}>
        <Icon name="home" type="material-community" color="#3F38CB" size={35} />
        <Text style={tw`text-white mx-1 text-xs text-[#3F38CB]`}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`items-center w-24 px-4 py-3 justify-center`}>
        <Icon
          name="basket"
          type="material-community"
          color="#3F38CB"
          size={35}
        />
        <Text style={tw`text-white mx-1 text-xs text-[#3F38CB]`}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`items-center w-24 px-4 py-3 justify-center`}>
        <Icon
          name="cards-heart-outline"
          type="material-community"
          color="#3F38CB"
          size={35}
        />
        <Text style={tw`text-white mx-1 text-xs text-[#3F38CB]`}>
          Favorites
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`items-center w-24 px-4 py-3 justify-center`}>
        <Icon
          name="account"
          type="material-community"
          color="#3F38CB"
          size={35}
        />
        <Text style={tw`text-white mx-1 text-xs text-[#3F38CB]`}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
