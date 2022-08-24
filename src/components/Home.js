import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '@rneui/themed'
import BottomNav from './BottomNav'

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#f1f1f1]`}>
      <View>
        <View style={tw`my-3 p-5 items-center`}>
          <Text style={tw`text-lg`}>Welcome 👋</Text>
          <Text style={tw`text-xl`}>Christopher Odhiambo</Text>
        </View>
        <View style={tw`mx-auto`}>
          <View style={tw`flex-row items-center`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={
                require("../assets/images/Gas.png")
              }
              />
              <View style={tw`p-2 mr-2 p-3 max-w-xs`}>
                <Text>Get quality gas convenietly at the tap of the button.</Text>
                <TouchableOpacity style={tw`my-3 bg-indigo-600 p-3 rounded-3xl w-32`}>
                  <Text style={tw`text-white text-center`}>Order Now</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={tw`flex-row items-center`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={
                require("../assets/images/gallon.png")
              }
              />
              <View style={tw`p-2 mr-2 p-3 max-w-xs`}>
                <Text>Get quality water convenietly at the tap of the button.</Text>
                <TouchableOpacity style={tw`my-3 bg-indigo-600 p-3 rounded-3xl w-32`}>
                  <Text style={tw`text-white text-center`}>Order Now</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
      <BottomNav />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})

// Not active color #7C76F0