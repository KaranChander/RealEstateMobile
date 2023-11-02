import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GoogleMap from "./GoogleMap";

const HeroSection = ({property}) => {

  if (!property) {
    return null; // Do not render anything if property is not defined
  }

  return (
    <View>
      
      <View style={styles.propertyInfoContainer}>
        <View style={styles.propertyInfo}>
          <Text style={styles.header}>${property.list_price}</Text>
          <Text>Price</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.header}>{property.description.beds}</Text>
          <Text>Beds</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.header}>{property.description.baths}</Text>
          <Text>Baths</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.header}>{property.description.sqft}</Text>
          <Text>Sq. Ft.</Text>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.address}>
            <Text style={{fontSize: 12 , fontWeight: "bold"}} >{property.location.address.line}</Text>
            <Text style={{fontSize: 12 , fontWeight: "bold"}} numberOfLines={1}>{property.location.address.city}</Text>
            <Text style={{fontSize: 12 , fontWeight: "bold"}} numberOfLines={1}>{property.location.address.state}</Text>
            <Text style={{fontSize: 12 , fontWeight: "bold"}} numberOfLines={1}>{property.location.address.postal_code}</Text>
        </View>

        <GoogleMap
              latitude={property.location.address.coordinate.lat} // Replace with your desired latitude
              longitude={property.location.address.coordinate.lon} // Replace with your desired longitude
          />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    fontWeight: 'bold',
    fontSize: 15,
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
    width: "25%", // Adjust the width as needed, e.g., '25%' for four columns
    alignItems: "center",
  },
  mapContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignContent: "space-between"
  },
  address:{
    width: "50%",
    fontSize: 30,
    marginRight: 'auto',
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

  // Other styles can be added here
});

export default HeroSection;
