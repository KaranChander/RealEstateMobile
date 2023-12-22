/**
 * The above code is a React Native component that implements a search bar using the Google Places
 * Autocomplete API.
 * @returns The SearchBar component is being returned.
 */
import React,  { useState } from 'react';
import { View, Button, Text, StyleSheet,TouchableOpacity, Animated } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Header from './CommonHeader';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



/**
 * The `SearchBar` component is a JavaScript function that renders a search bar with autocomplete
 * functionality for places using the Google Places Autocomplete API.
 * @returns The `SearchBar` component is returning a `SafeAreaView` component that wraps a `View`
 * component. Inside the `View` component, there is a `TouchableOpacity` component for the "Cancel"
 * button and a `GooglePlacesAutocomplete` component for the search bar with autocomplete
 * functionality. The `styles` object contains the styles for the components.
 */
const SearchBar = () => {

  const navigation = useNavigation();

  return (
    
    <SafeAreaView style={{ flex: 1 }}>

   <View style={ styles.container }>

     <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={{
          fontSize: 16

          }}>Cancel</Text>
        </TouchableOpacity>
 
    <GooglePlacesAutocomplete
          placeholder='Search place'
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log("checking map!!")
            console.log(details)
            navigation.navigate({
              name: 'PropertyList',
              params: { post: details },
              merge: true,
            });
             
          } }
          query={{
              key: 'AIzaSyD2iSR4agIM27BeD0q_mvr_zwCi-OpnkFE',
              language: 'en',
              components: 'country:us', 
          }}
          styles={{
            container: {
              flex: 1,
             
            },
          }}
          />
          
          </View>
          </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cancelButton: {
    position: 'relative',
    top: 0,
    left: 20,
    marginBottom: 20,
  },
  textInputContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  textInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999999',
    padding: 40,
    backgroundColor: '#fff',
  },
});

export default SearchBar;