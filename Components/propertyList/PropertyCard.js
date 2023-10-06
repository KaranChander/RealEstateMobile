import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PropertyCard = ({ property }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: property.image }} resizeMode="cover"/>
      <View style={styles.textContainer}>
      <Text style={styles.title}>{property.price}</Text>
      <Text style={styles.details}>{property.name}</Text>
      <View style={styles.row}>
        <Icon name="bed" size={20} color="#808080" />
        <Text style={styles.details}>{property.beds} beds</Text>
        <Icon name="water" size={20} color="#808080" style={styles.icon} />
        <Text style={styles.details}>{property.baths} baths</Text>
      </View>
      <Text style={styles.details}>{property.surfaceArea} sq ft</Text>
      </View>
    </View>
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
});

export default PropertyCard;