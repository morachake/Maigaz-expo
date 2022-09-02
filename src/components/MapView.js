import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resetInitialState, setIsLocationChoosen } from "../store/slices/mapSlice";
import MapViewProducts from "./MapViewProducts";

const Map = ({ navigation }) => {
  const dispatch = useDispatch()
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapDimesionHeight = Math.floor(Dimensions.get("window").height) + 35;
  const changeRegion = async ({ nativeEvent }) => {
    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${nativeEvent.coordinate.latitude}&lon=${nativeEvent.coordinate.longitude}&format=json`)
    setInitialRegion({
      latitude: nativeEvent.coordinate.latitude,
      longitude: nativeEvent.coordinate.longitude
    })
    dispatch(setIsLocationChoosen(true))
  }
  const isLocationChoosen = useSelector(state => state.map.isLocationChoosen)
  const navigateBack = () => {
    navigation.navigate('HomeView')
    dispatch(resetInitialState())
  }
  return (
    <>
      <View>
        <MapView
          style={{
            width: Dimensions.get("window").width,
            height: isLocationChoosen ? mapDimesionHeight / 2 : mapDimesionHeight
          }}
          mapType="mutedStandard"
          initialRegion={{
            latitude: -4.057814509118897,
            longitude: 39.66394716873765,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={(e) => changeRegion(e)}
        >
          <Marker
            draggable
            coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
            }}
          />
        </MapView>
        <TouchableOpacity
          style={tw`absolute top-16 bg-[#E5E5E5] p-3 w-12 h-12 rounded-full left-6 items-center justify-center`}
          onPress={navigateBack}
        >
          <Icon
            name="chevron-left"
            type="font-awesome-5"
            size={25}
            color="#3F38CB"
          />
        </TouchableOpacity>
      </View>
      {isLocationChoosen ? <MapViewProducts /> : (<></>)}
      
    </>
  );
};

export default Map
const styles = StyleSheet.create({});
