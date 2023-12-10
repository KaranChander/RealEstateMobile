import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GoogleMap, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';

const HeroSection = ({data, property}) => {

  if (!property) {
    return null; // Do not render anything if property is not defined
  }

  return (
    <View>
      <View style={styles.address}>
            <Text style={{fontSize: 16 , fontWeight: "regular"}} >{property.location.address.line}, {property.location.address.city}, {property.location.address.state} {property.location.address.postal_code}</Text>
            {/* <Text style={{fontSize: 12 , fontWeight: "bold"}} numberOfLines={1}>{property.location.address.city}</Text>
            <Text style={{fontSize: 12 , fontWeight: "bold"}} numberOfLines={1}>{property.location.address.state}</Text>
            <Text style={{fontSize: 12 , fontWeight: "bold"}} numberOfLines={1}>{property.location.address.postal_code}</Text> */}
        </View>
        <View style={styles.row}>
          <Icon name="bed" size={20} color="#808080" />
          <Text style={styles.details}>{property.description.beds} beds</Text>
          <Icon name="water" size={20} color="#808080" style={styles.icon} />
          <Text style={styles.details}>{property.description.baths} baths</Text>
          <Text style={styles.details}>{(property.description?.lot_sqft??0).toLocaleString()} sq ft</Text> 

        </View>

      <View style={styles.propertyInfoContainer}>
        <View style={styles.propertyInfo}>
          <Text style={styles.header}>${property.list_price.toLocaleString()}</Text>
          <Text>Price</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.header}>${(data["Cashflow per Unit per Month $"] || 0).toFixed(2).toLocaleString()}/mo</Text>
          <Text>Cash Flow</Text>
        </View>
        {/* <View style={styles.propertyInfo}>
          <Text style={styles.header}>{property.description.baths}</Text>
          <Text>Baths</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.header}>{property.description.sqft}</Text>
          <Text>Sq. Ft.</Text>
        </View> */}
      </View>

      <GoogleMap 
        style={styles.map} 
        provider='google'
        initialRegion={{
            latitude: property.location.address.coordinate.lat,
            longitude: property.location.address.coordinate.lon ,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          onPress={() => {
            const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
            const url = scheme + `${property.location.address.coordinate.lat},${property.location.address.coordinate.lon}`;
            Linking.openURL(url);
          }}
          >
            <Marker
          coordinate={{
            latitude: property.location.address.coordinate.lat,
            longitude: property.location.address.coordinate.lon,
          }}
         
        />
      </GoogleMap>
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    fontWeight: 'bold',
    fontSize: 17,
  },
  propertyInfoContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  propertyInfo: {
    width: "50%", // Adjust the width as needed, e.g., '25%' for four columns
    alignItems: "center",
  },
  mapContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignContent: "space-between"
  },
  address:{
    width: "100%",
    fontSize: 30,
    marginRight: 'auto',
    paddingLeft: 20,
    paddingTop: 20
  },
  mapImage: {
    width: 60,
    height: 60,
    marginLeft: 'auto',
    borderRadius: 10,
    shadowColor: "rgba(255,255,255, 255)",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1, // Opacity for the shadow
    shadowRadius: 10, // Controls the softness of the shadow
  },

  details: {
    fontSize: 16,
    margin: 3,
    color: '#808080', // Change color here

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon: {
    marginHorizontal: 0,
  },
  map: {
    flex: 1,
    height: 100,
    margin: 20,
    borderRadius: 12
  },

  // Other styles can be added here
});

export default HeroSection;
