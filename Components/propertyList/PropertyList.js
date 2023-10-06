import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropertyCard from './PropertyCard';
import Header from '../CommonHeader';
import { useNavigation } from '@react-navigation/native';
import GoogleCitiesList from "../GoogleCitiesList";
// const PropertyList = ({ properties }) => {
const PropertyList = () => {

    const properties = [
        {
          id: 1,
          image: 'https://ssl.cdn-redfin.com/photo/52/islphoto/199/genIslnoResize.73167199_0.jpg',
          name: '233 Kelton St #4,Boston, MA 02134',
          price: '$600,000',
          beds: 3,
          baths: 2,
          surfaceArea: '1500 sq ft',
        },
        {
          id: 2,
          image: 'https://ssl.cdn-redfin.com/photo/52/islphoto/163/genIslnoResize.73167163_0.jpg',
          name: '46 Chiswick Rd #7, Boston, MA 02134',
          price: '$400,000',
          beds: 4,
          baths: 3,
          surfaceArea: '2000 sq ft',
        },
        {
            id: 3,
            image: 'https://ssl.cdn-redfin.com/photo/52/islphoto/163/genIslnoResize.73167163_0.jpg',
            name: '46 Chiswick Rd #7, Boston, MA 02134',
            price: '$400,000',
            beds: 4,
            baths: 3,
            surfaceArea: '2000 sq ft',
          },
        // Add more properties as needed
      ];
      const navigation = useNavigation();

  return (
    <View>
        <Header onSearchPress={()=>{
        navigation.navigate('GoogleCitiesList'); // Replace 'SearchScreen' with the name of your search screen

        }} onMapPress={() => {

        }} type="properties"></Header>
   
      <View style={styles.listContainer}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PropertyCard property={item} />}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    listContainer: {
      padding: 10, // Add padding here
      backgroundColor: '#f0f0f0', // Change background color here

    },
  });

export default PropertyList;