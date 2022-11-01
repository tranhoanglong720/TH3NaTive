import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button, Animated } from 'react-native';
import Anh from './th.jpg';
import React, { useRef, useEffect } from 'react';
export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current  
  const FadeInView =() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  };
  return (
    <View style={styles.container}>
      
      <Animated.View style={{flex:0.5,
        opacity:fadeAnim,
      }}>
        <Image  source={Anh} style={{
          width:300,
          height:200,
        
        }}/>
        <Text>Open up App.js to start working on your app!</Text>
      </Animated.View>
      <Button title='Splash' onPress={FadeInView} />
      <StatusBar style="auto" />
    </View>
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
