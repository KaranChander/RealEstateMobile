import React,  { useState } from 'react';
import { View, Button, Text, StyleSheet,TouchableOpacity, Animated } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Header from './CommonHeader';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



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
          onPress={(data, details = null) => {
            navigation.navigate({
              name: 'PropertyList',
              params: { post: data },
              merge: true,
            });
              // 'details' is provided when fetchDetails = true
              // console.log(data, details);
              // navigation.setParams({ selectedPlace: data });
              // navigation.goBack();
          
          } }
          query={{
              key: 'AIzaSyDMQAb1deBPeXsj6plOwzkvunW2RwygMdw',
              language: 'en',
              components: 'country:us', // restrict results to cities in the US
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
    // position: 'absolute',
    // marginVertical: 40
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