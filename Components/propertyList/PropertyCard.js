import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PropertyCard = ({ property, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.card}>
         <Image style={styles.image} source={{ uri: property.primary_photo?.href }} resizeMode="cover"/>
        <View style={styles.textContainer}>
        <View style={styles.row}>
            <Text style={styles.title}>{"$"+(property.list_price).toLocaleString()}</Text>
            <Text style={styles.cashFlow}>{"$387/mo Cash Flow"}</Text>
          </View>
        <Text style={styles.details}>{property.location?.address?.line + " " + property.location?.address?.city + " " + property.location?.address?.state + " " + property.location?.address?.postal_code}</Text>
        <View style={styles.row}>
          <Icon name="bed" size={20} color="#808080" />
          <Text style={styles.details}>{property.description.beds} beds</Text>
          <Icon name="water" size={20} color="#808080" style={styles.icon} />
          <Text style={styles.details}>{property.description.baths} baths</Text>
        </View>
        <Text style={styles.details}>{(property.description?.lot_sqft??0).toLocaleString()} sq ft</Text> 
        </View> 
      </View>
    </ TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 10,
    // padding: 10, // Add padding here
    overflow: 'hidden',
    backgroundColor: '#ffffff', // Change background color here

  },
  textContainer: {
    marginLeft: 10,
    marginBottom: 7
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    marginLeft: -1,
  },
  details: {
    fontSize: 16,
    margin: 3,
    color: '#808080', // Change color here

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 0,
  },
  cashFlow: {
    fontWeight: 'semibold',
    fontSize: 16,
    margin: 10,
    marginLeft: 5,
  },
});

export default PropertyCard;
