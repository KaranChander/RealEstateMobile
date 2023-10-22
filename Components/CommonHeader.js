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
      title = 'Map'
    default:
      title = 'Properties';
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
        style={styles.backButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Icon name="arrow-back" size={30} color="#000000" />
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
  },
  notchArea: {
    backgroundColor: '#ffffff', // Change this to the color you want
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0, // Reduce padding here
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