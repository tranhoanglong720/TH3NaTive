import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrangChu from './screen/TrangChu';
import ListItemcf from './screen/ListItemCf';
import CfItem from './screen/CfItem';
import BottomTabNavigator from './screen/BottomTabScreens';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >   
      <Stack.Screen name="TrangChu" component={TrangChu} />  
      {/* <Stack.Screen name="ListItemcf" component={ListItemcf} /> */}
      <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator}/>
      <Stack.Screen name='CfItem' component={CfItem} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
