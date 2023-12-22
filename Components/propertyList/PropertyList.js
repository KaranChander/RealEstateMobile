import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import PropertyCard from './PropertyCard';
import Header from '../CommonHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import { plainToClass } from 'class-transformer';
import Property from '../../Models/Property';
import { SearchBar } from 'react-native-elements';

/**
 * The `PropertyList` function is a React component that displays a list of properties fetched from an
 * API based on the selected location and allows the user to search for properties and view property
 * details.
 * @returns The `PropertyList` component is being returned.
 */
const PropertyList = () => {
  var [apiSuccess, setAPISuccess] = useState(false)
  const route = useRoute();
  const [selectedPlace, setSelectedPlace] = useState(null);

  var [propertiesData, setPropertiesData] = useState([]);
  useEffect(() => {
    console.log("worked")
    if (route.params?.post) {
      setSelectedPlace(route.params.post);
      console.log(route.params.post)

    }
  }, [route.params?.post]);
  
  useEffect(() => {
    console.log("working step 1")


    console.log("working!")
    let city =  selectedPlace ? selectedPlace.address_components[0].long_name : "Boston";
    let stateCode = selectedPlace ? selectedPlace.address_components[2].short_name : "MA";
    const url = `http://18.205.25.241/property/list/v-2?from=0&to=10&city=${city}&stateCode=${stateCode}`;
    const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },

      };
        fetch(url, options).then(
                response => 
                response.json()
        ).then(responseData => {
                const properties = [];
                console.log(responseData)
                for(const property in responseData["data"]["home_search"]["results"] ) {
                        let newProperty = plainToClass(Property, responseData["data"]["home_search"]["results"][property]);
                        // if (newProperty.primary_photo.href === "string") {
                          newProperty.primary_photo.href = newProperty.primary_photo.href.replace(/(.*)(\.jpg)/, '$1-w480_h360_x2$2');
                        // }
                        properties.push(newProperty);

                }
                console.log(properties)

                properties.map(property =>
                    

                    { const randomNum = getRandomNumber();
                     
                     switch (randomNum) {
                             case 1:
                               property.color =  "rgb(154, 0, 0)";
                               break;
                             case 2:
                                     property.color = "rgb(190, 193, 0)";
                               break;
                             case 3:
                                     property.color = 'green';
                               break;
                             default:
                                     property.color = 'white';;
                               break;
                           }}
                     )

                      setPropertiesData(properties);
                setAPISuccess(true)

        });
  }, [selectedPlace])

  const navigation = useNavigation();
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3
  };
    
  return (
    <View style={{flex: 1}}>
        <Header onSearchPress={()=>{
        navigation.navigate('SearchBar'); 
        }} onMapPress={() => {
          navigation.navigate('PropertiesMap', { propertiesData: propertiesData ?? [], propertyLat: selectedPlace.geometry?.location?.lat ?? 42.361145, propertyLon: selectedPlace.geometry?.location?.lng ?? -71.057083 })
        }} type="properties"></Header>
      <View style={styles.container}>

      <SearchBar 
      lightTheme = {true}
      round = {true}
      containerStyle={{backgroundColor: '#f0f0f0'}}
      leftIconContainerStyle={{backgroundColor: 'white'}}
      inputContainerStyle={{backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#999999',
      borderBottomWidth: 1, borderBottomColor: '#999999' 
    }}
      placeholder={(selectedPlace) ? selectedPlace.address_components[0].long_name + ", " + selectedPlace.address_components[2].short_name  :"Search places"}

      searchIcon = {true}
      inputStyle={{       
        backgroundColor: '#fff',
        fontSize: 16,
        padding: 0,
      }
      }

      />
      <TouchableOpacity 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'transparent' 
          }}
        onPress={() => navigation.navigate('SearchBar')}
        >
               
         </TouchableOpacity>
        

      </View>
      <View style={styles.listContainer}>
      <FlatList
        data={propertiesData}
        keyExtractor={(item) => item.propertyId}
        renderItem={({ item }) => 
        <PropertyCard 
          property={item}
          onPress={() => {
            console.log('Card pressed:');
            navigation.navigate('PropertyDetails', { property: item });
          }}
        /> }
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
    listContainer: {
      padding: 10,
      backgroundColor: '#f0f0f0', 
      marginBottom: 200
    },
    container: {
     
    },
  });

export default PropertyList;