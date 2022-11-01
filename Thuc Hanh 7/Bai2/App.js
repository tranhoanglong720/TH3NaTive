import { StatusBar } from 'expo-status-bar';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useEffect } from 'react';
export default function App() {

 
  const fadeAnim = useRef(new Animated.Value(10)).current  
  
   const FadeInView =() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 200,
          duration: 5000,
        }
      ).start();
    };

  return (
    <View style={styles.container}>
   
      <Button onPress={FadeInView} title='Them'/>        
    <Animated.View style={{
      marginLeft:fadeAnim,
    }}>
      <Text style={{
        marginRight:200,
        fontSize:50,
        fontWeight:'bold',
      }}>Test Gia Tri</Text>
    </Animated.View>
      
 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent:'center'
  },
});
