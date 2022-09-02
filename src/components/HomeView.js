import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { resetInitialState, setMapProductType } from '../store/slices/mapSlice'
import { useIsFocused } from '@react-navigation/native'
import { IMAGES } from '../constants/Index'


export default function HomeView ({ navigation }) {
  const dispatch = useDispatch()
  const navOptions = [
    {
      type: 'gas',
      image: IMAGES.gas
    },
    {
      type: 'water',
      image: IMAGES.gallon
    }
  ]
  const handleOnPress = (option) => {
    dispatch(setMapProductType(option.type))
    navigation.navigate('MapView')
  }
  return (
    <SafeAreaView style={tw`flex-1 bg-[#E5E5E5]`}>
      <View>
        <View style={tw`my-3 p-5 items-center`}>
          <Text style={tw`text-lg`}>Welcome 👋</Text>
          <Text style={tw`text-xl`}>Christopher Odhiambo</Text>
        </View>
        <View style={tw`mx-auto`}>
          {navOptions.map(option => (
            <View style={tw`flex-row items-center`} key={option.type}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain"
                }}
                source={option.image}
                />
                <View style={tw`p-2 mr-2 p-3 max-w-xs`}>
                  <Text>Get quality {option.type} convenietly at the tap of the button.</Text>
                  <TouchableOpacity
                    style={tw`my-3 bg-indigo-600 p-3 rounded-3xl w-32`}
                    onPress={() => handleOnPress(option)}
                  >
                    <Text style={tw`text-white text-center`}>Order Now</Text>
                  </TouchableOpacity>
                </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})