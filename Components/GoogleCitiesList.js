import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Header from './CommonHeader'; // Adjust the path as needed

const SearchBar = () => {
  return (
    <><Header></Header>
    <View style={styles.container}></View>
    <GooglePlacesAutocomplete
          placeholder='Search place'
          onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
          } }
          query={{
              key: 'AIzaSyDMQAb1deBPeXsj6plOwzkvunW2RwygMdw',
              language: 'en',
              components: 'country:us', // restrict results to cities in the US
          }} />
          
          </>
          
  );
  
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 10, // Adjust this value as needed
    },
  });

export default SearchBar;