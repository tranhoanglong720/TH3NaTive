import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View ,Animated} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, { useRef, useEffect } from 'react';
export default function App() {

  const fadeAnim = useRef(new Animated.Value(0)).current  
  
   const FadeInView =() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 300,
          duration: 5000,
        }
      ).start();
    };
    const FadeInViewStop= ()=>{
      Animated.timing(
        fadeAnim,
        {
          toValue: 300,
          duration: 5000,
        }
      ).stop();
    };
    const FadeInViewReset= ()=>{
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 0,
        }
      ).start();
    };
  return (
    <View style={styles.container}>
       <Animated.View style={{
      marginLeft:fadeAnim,
    }}>
        <Entypo name="paper-plane" size={24} color="black" />
    </Animated.View>
  
      <View style={{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Button title='start' onPress={FadeInView}/>
      <Button title='stop' onPress={FadeInViewStop}/>
      <Button title='reset' onPress={FadeInViewReset}/>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});
