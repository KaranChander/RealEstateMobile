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
