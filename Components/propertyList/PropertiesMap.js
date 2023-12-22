import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import MapView, { Marker } from 'react-native-maps';
import CommonHeader from '../CommonHeader';


/**
 * The `PropertiesMap` function is a React component that renders a map view with markers representing
 * properties, and handles marker press events to navigate to property details.
 * @returns The component `PropertiesMap` is being returned.
 */
const PropertiesMap = ({ onSearchPress, onMapPress, type }) => {
const route = useRoute();
const propertiesData = route.params?.propertiesData;
console.log("CHeck")
const colors = ['#50C878', '#D30000']; 
const randomColor = colors[Math.floor(Math.random() * colors.length)];
const navigation = useNavigation();

const handleMarkerPress = (property) => {
  // Handle the marker press here
  navigation.navigate('PropertyDetails', { property: property });

};
console.log(propertiesData)
  return (
    <View style={styles.container}>
      <CommonHeader onSearchPress={onSearchPress} onMapPress={onMapPress} type={type} />
      <MapView 
        style={styles.map} 
        provider='google'
        initialRegion={{
            latitude: route.params?.propertyLat,
            longitude: route.params?.propertyLon ,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
    {propertiesData.map((property, index) => {
      const color = property.data["Cashflow per Unit per Month $"] < 0 ? "#D30000" : "#50C878" 
      const icon = property.data["Cashflow per Unit per Month $"] < 0 ? "caretdown" : "caretup" 
      return (
      <Marker
        key={property.propertyId}
        coordinate={{ latitude: property.location?.address?.coordinate?.lat ?? 0, longitude: property.location?.address?.coordinate?.lon ?? 0 }}
        onPress={() => handleMarkerPress(property)}
      >
        <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
          <Text>{"$"+(property.list_price).toLocaleString()}</Text>
          <Icon name={icon} size={14} color={color} />
        </View>
        <View style={{ width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid', borderLeftWidth: 10, borderRightWidth: 10, borderBottomWidth: 20, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: 'white', transform: [{ rotate: '180deg'}] }} />
      </View>
    </Marker>)
})}
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