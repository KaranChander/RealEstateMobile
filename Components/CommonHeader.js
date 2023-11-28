import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ onSearchPress, onMapPress, type }) => {
  let title;
  switch(type) {
    case 'properties':
      title = 'Property List';
      break;
    case 'map':
      title = 'Map';
      break;

    case 'buyRentHold':
      title = "Buy Rent Hold";
      break;

    default:
      title = 'Properties';
      break;

  }    
    const showIcons = type === 'properties';
    const showBackButton = type !== 'properties';
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
    {/* <View style={styles.notchArea} /> */}
    <View style={styles.header}>
      <View style={styles.left} />
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} 
        style={[styles.backButton, {zIndex: 1 }]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Increase touchable area
        >
          <Icon name="arrow-back" size={30} color="#000000" pointerEvents="box-none" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {showIcons && (
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon} onPress={onMapPress}>
            <Icon name="map" size={30} color="#008000" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.icon} onPress={onSearchPress}>
            <Icon name="search" size={30} color="#008000" />
          </TouchableOpacity> */}
         
        </View>
      )}
      </View>      
     </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff', // Change this to the color you want
    // flex: 1,
    paddingBottom: -10, // Decrease this value to decrease the bottom padding

  },
  notchArea: {
    backgroundColor: '#ffffff', // Change this to the color you want
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    height: 30,
  },
  left: {
    width: 30, // Adjust this width to balance the search icon
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute', // Add this line
    left: 0, // Add this line
    right: 0, // Add this line

    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 10
  },
  icon: {
    marginHorizontal: 5, // Add margin here
  },
});

export default Header;