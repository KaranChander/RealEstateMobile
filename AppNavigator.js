import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from './Components/SearchBar'; // Adjust the path as needed
import PropertyList from './Components/propertyList/PropertyList';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="PropertyList">
    <Stack.Screen name="PropertyList" component={PropertyList} />
    <Stack.Screen name="SearchBar" component={SearchBar}    />
  </Stack.Navigator>
);

export default AppNavigator;