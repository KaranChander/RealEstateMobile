import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import MapView, { Marker } from 'react-native-maps';
import CommonHeader from '../CommonHeader';

const PropertiesMap = ({ onSearchPress, onMapPress, type }) => {
const route = useRoute();
const propertiesData = route.params?.propertiesData;
console.log("CHeck")

console.log(propertiesData)
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
    {propertiesData.map((property, index) => (
      <Marker
        key={index}
        coordinate={{ latitude: property.location.address.coordinate.lat, longitude: property.location.address.coordinate.lon }}
      >
        <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
          <Text>{"$"+(property.list_price).toLocaleString()}</Text>
          <Icon name="caretup" size={16} color="#50C878" />
          {/* <Image
            source={require('./path-to-your-green-arrow.png')} // replace with your local image or uri
            style={{ width: 20, height: 20 }}
          /> */}
        </View>
        <View style={{ width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid', borderLeftWidth: 10, borderRightWidth: 10, borderBottomWidth: 20, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: 'white', transform: [{ rotate: '180deg'}] }} />
      </View>
    </Marker>
  ))}
         {/* <Marker
          coordinate={{
            latitude: 42.3601,
            longitude: -71.0589,
          }}
          title="Boston, MA"
          description="A marker in Boston, MA"
        /> */}
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