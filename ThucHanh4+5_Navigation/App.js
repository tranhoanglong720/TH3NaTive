import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen/Srceen1';
import Lab2b from './screen/Lab2b';
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator >   
      <Stack.Screen name="Screen1" component={Screen1} />  
      <Stack.Screen name="Lab2b" component={Lab2b} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}