import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HeroSection from './fragments/HeroSection';
import PriceInsights from './fragments/PriceInsights';
import BuyRentHold from './fragments/BuyRentHold';
import HomeFacts from './fragments/HomeFacts';
import About from './fragments/About';

const PropertyDetails = ({ route, navigation, dataProvided, calculatorData}) => {
  const { property } = route.params;
  const propertyId = property.property_id;
  const [data, setData] = useState(null);
  const [calculator, setCalculator] = useState(null);

  useEffect(() => {
    // Make both API calls in parallel
    if (dataProvided && calculatorData) {
      setData(dataProvided);
      setCalculator(calculatorData);
    } else {

      const apiUrl = `http://calculator-env.eba-62rnfbat.us-east-1.elasticbeanstalk.com/property/details?property_id=${propertyId}`;
      const calUrl = `http://calculator-env.eba-62rnfbat.us-east-1.elasticbeanstalk.com/calculator?property_id=${propertyId}`;

      Promise.all([
        fetch(apiUrl).then((response) => response.json()),
        fetch(calUrl).then((response) => response.json())
      ])
      .then(([apiData, calData]) => {
        // Update the state with the retrieved data
        console.log("details from api call received");
        setData(apiData.data.home);
        console.log("details from calculator api call received");
        console.log(calData);
        setCalculator(calData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    }
  }, [property, dataProvided, calculatorData]); // This effect will re-run whenever 'property' changes

  return (
    <ScrollView>
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={data ? { uri: data.photos[0].href } : null} resizeMode="cover" />
      {/* Property Name */}
      {data && <HeroSection property={data} />}
      {calculator && <BuyRentHold data={calculator} property={data} calculator={calculator} />}
      {data && <PriceInsights data={data}  />}
      {data && <HomeFacts data={data} />}
      {data && <About data={data}  />}
    </ScrollView>
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
