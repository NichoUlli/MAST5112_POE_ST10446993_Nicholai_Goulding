import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddMenu from './screens/AddItems';
import FilterByCourse from './screens/FilterByCourse';

//linking all the screens together
const Stack = createNativeStackNavigator();

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  const addItem = item => {
    setMenuItems([...menuItems, item]);
};

  const removeItem = index => {
    const newMenuItems = [...menuItems];
    newMenuItems.splice(index, 1);
    setMenuItems(newMenuItems);
};

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} menuItems={menuItems} removeItem={removeItem} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenu">
          {props => <AddMenu {...props} addItem={addItem} />}
        </Stack.Screen>
        <Stack.Screen name="FilterByCourse">
          {props => <FilterByCourse {...props} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;