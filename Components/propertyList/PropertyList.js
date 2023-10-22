import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import PropertyCard from './PropertyCard';
import Header from '../CommonHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import { plainToClass } from 'class-transformer';
// const PropertyList = ({ properties }) => {
import { SafeAreaView } from 'react-native-safe-area-context';
import Property from '../../Models/Property';
import { SearchBar } from 'react-native-elements';

const PropertyList = () => {
  var [apiSuccess, setAPISuccess] = useState(false)
  const route = useRoute();
  // var selectedPlace = route.params?.selectedPlace;
  // var [locationModel, setLocationModel] = useState(new Property(undefined, selectedPlace.state.lat, selectedPlace.state.long, selectedPlace.state.name, locatselectedPlaceion.state.stateName));
  const [selectedPlace, setSelectedPlace] = useState(null);

  var [propertiesData, setPropertiesData] = useState([]);
  useEffect(() => {
    console.log("worked")
    if (route.params?.post) {
      setSelectedPlace(route.params.post);
    }
  }, [route.params?.post]);
  
  useEffect(() => {
    console.log("working step 1")

    if (selectedPlace) {

    console.log("working!")
    const url = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';
    const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '862f6090ffmshb31aa1281374aaap118f5fjsn52c23f15dd50',
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
        },
        body: JSON.stringify({
          limit: 200,
          offset: 0,
          // lat: locationModel.lat,
          // lon: locationModel.long,
          city: selectedPlace.terms[0].value,
          state_code: selectedPlace.terms[1].value,     
         status: ['for_sale'],
        //   sort: {field: 'name' },
        }),
      };
        fetch(url, options).then(
                response => response.json()
        ).then(responseData => {
                const properties = [];
                console.log(responseData)
                for(const property in responseData["data"]["home_search"]["results"] ) {
                        let newProperty = plainToClass(Property, responseData["data"]["home_search"]["results"][property]);
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

                    // const filtered = properties.filter(property => {
                    //         return property.list_price !== undefined || property.list_price !== null; 
                    //  })
            //     setPropertiesData(properties.slice(0, 50));
                      setPropertiesData(properties);

                setAPISuccess(true)

        });
      }
}, [selectedPlace])

      const navigation = useNavigation();
      const getRandomNumber = () => {
        return Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3
      };
    
    

  return (
    <View>
        <Header onSearchPress={()=>{
        navigation.navigate('SearchBar'); // Replace 'SearchScreen' with the name of your search screen

        }} onMapPress={() => {
          navigation.navigate('PropertiesMap')
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
      placeholder={(selectedPlace) ? selectedPlace.description :"Search places"}

      searchIcon = {true}
      inputStyle={{
       
        // padding: 40,
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
        // refresh={(data)=> {
        //   console.log("alright!")
        // }   }
        >
               
         </TouchableOpacity>
        

      </View>
      <View style={styles.listContainer}>
      <FlatList
        data={propertiesData}
        keyExtractor={(item) => item.propertyId}
        renderItem={({ item }) => <PropertyCard property={item} />}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
    listContainer: {
      padding: 10, // Add padding here
      backgroundColor: '#f0f0f0', // Change background color here

    },
    container: {
      // marginLeft: 20,
      // marginRight: 20,
      // marginTop: 0,
      // height: 100, // Adjust this value as needed
      // justifyContent: 'center',
      // width: '100%', // This will make the container take up the full width

    },
  });

export default PropertyList;