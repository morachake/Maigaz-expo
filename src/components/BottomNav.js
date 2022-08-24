import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import { setActiveNav } from "../store/slices/bottomNavSlice";

const BottomNav = () => {
  const navOptions = useSelector((state) => state.bottomNav.bottomNavOptions);
  const dispatch = useDispatch()
  
  const setActiveBottomNav = (option) => {
    dispatch(setActiveNav(option))
  }
  return (
    <View
      style={tw`flex-row justify-evenly mt-auto mb-3 bg-white rounded-3xl -mb-1`}
    >
      {navOptions.map((option) => (
        <TouchableOpacity
          style={tw`items-center w-24 px-4 py-3 justify-center`}
          key={option.navName}
          onPress={() => setActiveBottomNav(option)}
        >
          <Icon
            name={`${option.iconName}`}
            type="material-community"
            color={`${option.isActive ? option.activeIconColor: option.inactiveIconColor }`}
            size={35}
          />
          {option.isActive && (
            <Text style={tw`text-white mx-1 text-xs text-[#3F38CB]`}>
              { option.navName }
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
