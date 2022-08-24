import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS, IMAGES } from '../constants/Index'
import Button from './Button'

const FavoriteView = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#E5E5E5]`}>
      <View style={{ alignItems: 'center',justifyContent: 'space-evenly' }}>
            <Image
                resizeMode="contain"
                source={IMAGES.Fav}
            />
            <Text style={styles.texts}>You Have No Favourites</Text>
            <Text style={styles.texts}>Click Below to Start An new Order</Text>
            <Button
                title="Create Order"
                style={styles.orderButton}
            />
        </View>
    </SafeAreaView>
  );
};

export default FavoriteView;

const styles = StyleSheet.create({
  image: {
      marginTop: 20,
  },
  orderButton: {
      fontSize: 24,
      color: '#ffff',
      fontFamily: 'Inter-Bold'
  },
  texts: {
      marginBottom: 15,
      fontSize: 18,
      color: COLORS.lightSecondary,
      fontFamily: 'Inter-Medium',
  }
})