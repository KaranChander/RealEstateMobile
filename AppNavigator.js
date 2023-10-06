import { createStackNavigator } from '@react-navigation/stack';
import GoogleCitiesList from './Components/GoogleCitiesList'; // Adjust the path as needed
import PropertyList from './Components/propertyList/PropertyList';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="PropertyList">
    <Stack.Screen name="PropertyList" component={PropertyList} />
    <Stack.Screen name="GoogleCitiesList" component={GoogleCitiesList} />
  </Stack.Navigator>
);

export default AppNavigator;