import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Animated } from 'react-native';
import React,{useRef ,useEffect} from 'react';



export default function App() {
  const FadeInView= (props) => {
    const fadeAnim=useRef(new Animated.Value(0)).current
  
    useEffect(()=>{
      Animated.timing(
        fadeAnim,{
          toValue:1,
          duration:5000,
        }
      ).start();
    },[fadeAnim])
  
    return (
      <Animated.View                 
        style={{
          ...props.style,
          opacity: fadeAnim,         
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  return (
    <View style={styles.container}>
     <FadeInView style={{with:200,
                  height:200,
          backgroundColor:'pink',
    
    }}>
     <Text style={{
      fontSize:50,
      fontWeight:'bold',
      color:'blue'
     }}>Wellcome To Anmition ReactNaTive</Text>
     </FadeInView>  
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
