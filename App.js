import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import PropertyList from './Components/propertyList/PropertyList';
import SearchBar from './Components/SearchBar';
import PropertiesMap from './Components/propertyList/PropertiesMap';
import PropertyDetails from './Components/propertyDetail/propertyDetails';
import EditCalculator from './Components/editCalculator/EditCalculator';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const OtherStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="PropertyList">
    <HomeStack.Screen name="PropertyList" component={PropertyList}   options={{ headerShown: false }} />
    <HomeStack.Screen name="SearchBar" component={SearchBar}   options={{ headerShown: false, animationEnabled: false}}  />
    <HomeStack.Screen name="PropertiesMap" component={PropertiesMap}   options={{ headerShown: false}} />
    <HomeStack.Screen name="PropertyDetails" component={PropertyDetails}   options={{ headerShown: false}} />
    <HomeStack.Screen name="EditCalculator" component={EditCalculator}   options={{ headerShown: false}} />
  </HomeStack.Navigator>
);

const OtherStackScreen = () => (
  <OtherStack.Navigator>
    <OtherStack.Screen name="Other" component={OtherScreen} />
    // Add other screens for this stack here
  </OtherStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Add this line
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Screen1') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Screen2') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Screen3') {
              iconName = focused ? 'add' : 'add-outline';
            } else if (route.name === 'Screen4') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Screen5') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#008000',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Screen1" component={HomeStackScreen} />
        <Tab.Screen name="Screen2" component={HomeStackScreen} />
        <Tab.Screen name="Screen3" component={HomeStackScreen} />
        <Tab.Screen name="Screen4" component={HomeStackScreen} />
        <Tab.Screen name="Screen5" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;