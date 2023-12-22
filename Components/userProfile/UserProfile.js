/**
 * The above code defines a React component called UserProfile that displays a user profile with
 * options such as About, Glossary, and Settings, and a logout button.
 * @returns The UserProfile component is being returned.
 */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

/**
 * The UserProfile function is a React component that displays a user's profile information, including
 * their name and profile picture, as well as options for navigating to different sections of the app
 * and a logout button.
 * @returns The UserProfile component is returning a View component that contains the user's profile
 * information, options section, and a logout button.
 */
const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image style={styles.profileImage}   source={{ uri: "https://st3.depositphotos.com/6672868/13701/v/1600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" }}  />
        <Text style={styles.profileName}>{"Karan"}</Text>
      </View>

      <View style={styles.optionsSection}>
  {['About', 'Glossary', 'Settings'].map((option) => (
    <TouchableOpacity 
      key={option} 
      style={styles.option}
      onPress={() => {
        if (option === 'Glossary') {
          navigation.navigate('Glossary');
        }
      }}
    >
      <Text style={styles.optionText}>{option}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  ))}
</View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  profileSection: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12

  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsSection: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 20,
    borderRadius: 12
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    alignItems: 'left',
  },
  logoutText: {
    color: 'red',
    fontSize: 18,
},
});

export default UserProfile;