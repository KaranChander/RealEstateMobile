// Import necessary modules
import React, { useCallback } from 'react';
import Slider, { MarkerType, setA11yMarkerPropsFunctionArgs } from 'react-native-a11y-slider';

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
        text: `${value}%`, // Include the percentage sign
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
      setA11yMarkerProps={setA11yProps}
      style={{ width: '50%' }}
      onValuesChangeFinish={(values) => onValueChange(values[0])}
    />
  );
};

// Export the PercentageSlider component
export default PercentageSlider;
