import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View>
        <Text style={tw`text-green-700 text-center my-10`}>Good Afternoon, Christopher 👋</Text>
        <View style={`flex justify-center items-center`}>
          <View style={tw`flex-row max-w-sm`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={
                require("../assets/images/gas.png")
              }
              />
              <View style={tw`p-2 mr-2`}>
                <Text>Get quality gas convenietly at the tap of the button</Text>
              </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})