import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import tw from "twrnc";
import { Icon } from "@rneui/themed";

const Map = () => {
  const mapDimesionHeight = Math.floor(Dimensions.get("window").height) + 35;
  return (
    <View>
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: mapDimesionHeight,
        }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View
        style={tw`absolute top-16 bg-[#E5E5E5] p-3 w-12 h-12 rounded-full left-6 items-center justify-center`}
      >
        <Icon
          name="chevron-left"
          type="font-awesome-5"
          size={25}
          color="#3F38CB"
        />
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
