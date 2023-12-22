/**
 * The `GoogleMap` function is a React component that renders a Google Map using the
 * `react-native-maps` library.
 * @returns The `GoogleMap` component is being returned. It renders a `View` component with a `MapView`
 * component inside it. The `MapView` component displays a map with a marker at the specified latitude
 * and longitude. The `GoogleMap` component takes in three props: `latitude`, `longitude`, and
 * `containerStyle`. The `containerStyle` prop is used to customize the style of the
 */
/* The line `import React from 'react';` is importing the React library, which is necessary for writing
React components. React is a JavaScript library for building user interfaces. */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const GoogleMap = ({ latitude, longitude, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <MapView
        style={styles.mapImage}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.1, // You can adjust this
          longitudeDelta: 0.1, // You can adjust this
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 80,
    height: 80,
    marginLeft: 'auto',
    borderRadius: 50
  },
  map: {
    flex: 1,
  },
  mapImage: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // A semi-transparent black shadow
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default GoogleMap;
