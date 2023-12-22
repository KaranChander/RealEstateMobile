/* The line `import React from 'react';` is importing the React library, which is necessary for writing
React components. It allows you to use JSX syntax and create reusable UI components. */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * The `Header` component is a reusable header component in a React Native app that displays a title
 * and optional icons based on the `type` prop.
 * @returns The Header component is being returned.
 */
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
    case 'propertyDetail':
      title = "Property Detail";
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
    <View style={styles.header}>
      <View style={styles.left} />
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} 
        style={[styles.backButton, {zIndex: 1 }]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
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
        </View>
      )}
      </View>      
     </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
    paddingBottom: -10, 

  },
  notchArea: {
    backgroundColor: '#ffffff', 
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
    width: 30,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: 0, 
    right: 0,

    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 10
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default Header;