import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CommonHeader from '../CommonHeader';

const PropertiesMap = ({ onSearchPress, onMapPress, type }) => {
  return (
    <View style={styles.container}>
      <CommonHeader onSearchPress={onSearchPress} onMapPress={onMapPress} type={type} />
      <MapView 
        style={styles.map} 
        provider='google'
        initialRegion={{
            latitude: 42.3601,
            longitude: -71.0589,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
         <Marker
          coordinate={{
            latitude: 42.3601,
            longitude: -71.0589,
          }}
          title="Boston, MA"
          description="A marker in Boston, MA"
        />
        </MapView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default PropertiesMap;