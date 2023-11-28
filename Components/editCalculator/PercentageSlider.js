// Import necessary modules
import React, { useCallback } from 'react';
import Slider, { MarkerType, setA11yMarkerPropsFunctionArgs } from 'react-native-a11y-slider';
import MyMarker from './CustomPercentageSlider';
import {
  
  StyleSheet,
  
} from "react-native";
// Define the PercentageSlider component
const PercentageSlider = ({ value, onValueChange }) => {
  // Define a callback function to set accessibility properties
  const setA11yProps = useCallback(
    ({ markerType, value, minValue, maxValue }) => {
      let accessibilityLabel = 'Min percentage';
      if (markerType === MarkerType.UPPER) {
        accessibilityLabel = 'Max percentage';
      }
  
      const accessibilityValue = {
        min: minValue,
        max: maxValue,
        now: value,
        text: `${value}%`, // Include the percentage sign after the value
      };
  
      return {
        accessibilityLabel,
        accessibilityValue,
      };
    },
    []
  );
  

  // Return JSX structure for the component
  return (
    <Slider
      min={0}
      max={100}
      values={[value]}
      markerComponent={MyMarker}
      setA11yMarkerProps={setA11yProps}
      style={{ width: '100%' }}
      labelStyle={styles.labelStyle}
      labelTextStyle={styles.labelTextStyle}

      onValuesChangeFinish={(values) => onValueChange(`${values[0]}%`)}
    />
  );
};

const styles = StyleSheet.create({
  
  labelStyle: {
    backgroundColor: "transparent",
    borderRadius: 5,
    color: "black",
  },
  labelTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: "italic",
    color: "green",

  },
});


// Export the PercentageSlider component
export default PercentageSlider;

