import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeroSection from './fragments/HeroSection';
import PriceInsights from './fragments/PriceInsights';
import BuyRentHold from './fragments/BuyRentHold';
import HomeFacts from './fragments/HomeFacts';
import About from './fragments/About';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import Header from '../CommonHeader';

/**
 * The `PropertyDetails` function is a React component that displays details about a property,
 * including an image, property name, and various sections such as hero section, about section,
 * buy/rent/hold section, price insights, and home facts.
 * @returns The `PropertyDetails` component is returning a JSX fragment that contains a `Header`
 * component, a `ScrollView` component, and several other components such as `HeroSection`, `About`,
 * `BuyRentHold`, `PriceInsights`, and `HomeFacts`.
 */
const PropertyDetails = ({ route, navigation,}) => {
  const { property } = route.params;
  const propertyId = property.property_id;
  const [data, setData] = useState(null);
  const [calculator, setCalculator] = useState(null);
  const [defaults, setDefaults] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      // Reset the state
      setData(null);
      setCalculator(null);
      setDefaults(null);

      // Make both API calls in parallel
      if (route.params.propertyData && route.params.calculatorData && route.params.defaultsData) {
        setData(route.params.propertyData);
        setCalculator(route.params.calculatorData);
        setDefaults(route.params.defaultsData);
      } else {
        const apiUrl = `http://18.205.25.241/property/details?property_id=${propertyId}`;
        const calUrl = `http://18.205.25.241/calculator?property_id=${propertyId}`;

        Promise.all([
          fetch(apiUrl).then((response) => response.json()),
          fetch(calUrl).then((response) => response.json())
        ])
          .then(([apiData, calData]) => {
            // Update the state with the retrieved data
            console.log("details from api call received");
            setData(apiData.data.home);
            console.log("details from calculator api call received");
            console.log(calData.defaults);

            setCalculator(calData);
            setDefaults(calData.defaults);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
    }, [property, route]) // This effect will re-run whenever 'property' changes
  );

  return (
    <>
    
    <Header onSearchPress={()=>{
      // navigation.navigate('SearchBar'); // Replace 'SearchScreen' with the name of your search screen

      }} onMapPress={() => {
        // navigation.navigate('PropertiesMap', { propertiesData: propertiesData, propertyLat: selectedPlace.geometry.location.lat, propertyLon: selectedPlace.geometry.location.lng })
      }} type="propertyDetail"></Header>
    
  <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      {/* Back button */}
      {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity> */}
      <Image style={styles.image} source={data ? { uri: data.photos[0].href.replace(/(.*)(\.jpg)/, '$1-w480_h360_x2$2') } : null} resizeMode="cover" />
      {/* Property Name */}
      {calculator && data && <HeroSection data={calculator} property={data} />}
      {data && <About data={data}  />}

      {calculator && data && defaults && <BuyRentHold data={calculator} property={data} defaults={defaults} />}
      {data && <PriceInsights data={data}  />}
      {data && <HomeFacts data={data} />}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    width: '100%',
    height: 200,
  },
  backButton: {
    left: 10,
    top: 10,
  },
  backButtonText: {
    fontSize: 30,
    color: '#000000',
  },
  propertyName: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default PropertyDetails;
