import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PDFScreen from './GlossaryPdfViewer';
import { NavigationAction } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

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
        // Add navigation for other options if needed
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