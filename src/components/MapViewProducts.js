import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { COLORS, IMAGES } from "../constants/Index";
import { Icon } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { setIsLocationChoosen } from "../store/slices/mapSlice";
import { addProductToCart } from "../store/slices/cartSlice";

const data = [
  {
    id: 1,
    name: "13kg Gas Cylinder",
    vendor: "Ghana Amin",
    image: IMAGES.gas,
  },
  {
    id: 2,
    name: "13kg Gas Cylinder",
    vendor: "Ghana Amin",
    image: IMAGES.gas,
  },
];

export default function MapViewProducts() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart.length)
  const hideMapViewProducts = () => {
    dispatch(setIsLocationChoosen(false));
  };
  const addToCart = (product) => {
    dispatch(addProductToCart(product))
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
      <ScrollView>
        <View style={tw`flex-row ml-4 flex-wrap shrink-0`}>
          {data.map((item) => {
            return (
              <View
                style={tw`mx-2 border-2 my-2 border-gray-200 p-3 rounded-2xl items-center`}
                key={item.id}
              >
                <Image
                  resizeMode="contain"
                  source={item.image}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
                <Text style={tw`my-1`}>13kg Gas Cylinder</Text>
                <TouchableOpacity
                  style={tw`py-2 bg-[#3F38CB] px-3 rounded-3xl my-2`}
                  onPress={() => addToCart(item)}
                >
                  <Text style={tw`text-white`}>Add To Cart</Text>
                </TouchableOpacity>
                {cart &&
                  cart.map((cartItem) => (
                    <View
                      style={tw`flex-row items-center justify-between my-2`}
                    >
                      <TouchableOpacity
                        style={tw`bg-[#3F38CB] p-1 rounded-full`}
                      >
                        <Icon
                          name="minus"
                          type="font-awesome-5"
                          color="white"
                          size={20}
                        />
                      </TouchableOpacity>
                      <Text style={tw`mx-4`}>1</Text>
                      <TouchableOpacity
                        style={tw`bg-[#3F38CB] p-1 rounded-full`}
                      >
                        <Icon
                          name="plus"
                          type="font-awesome-5"
                          color="white"
                          size={20}
                        />
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
