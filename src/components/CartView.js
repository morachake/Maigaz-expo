import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

const CartView = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#E5E5E5]`}>
        <Text>CartView</Text>
    </SafeAreaView>
  )
}

export default CartView

const styles = StyleSheet.create({})