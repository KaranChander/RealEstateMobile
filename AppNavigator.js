import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from './Components/SearchBar'; // Adjust the path as needed
import PropertyList from './Components/propertyList/PropertyList';
import UserProfile from './Components/userProfile/UserProfile';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="PropertyList">
    <Stack.Screen name="PropertyList" component={PropertyList} />
    <Stack.Screen name="SearchBar" component={SearchBar}    />
    <Stack.Screen name="UserProfile" component={UserProfile} />

  
  </Stack.Navigator>
);

export default AppNavigator;