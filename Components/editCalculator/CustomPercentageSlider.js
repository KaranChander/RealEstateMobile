
import React from "react";
import { View } from "react-native";
import { MarkerProps } from "react-native-a11y-slider";

function MyMarker(props) {
    const { color } = props;
    return (
      <View
        style={{
          backgroundColor: "green",
          height: MyMarker.size,
          width: MyMarker.size,
          borderRadius: MyMarker.size / 2,
          marginBottom: 0
        }}
      />
    );
  }
  MyMarker.size = 20;
  export default MyMarker;