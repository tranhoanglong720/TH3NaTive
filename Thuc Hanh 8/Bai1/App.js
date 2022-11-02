import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Animated} from 'react-native';
import meo from './meo.png';
import React,{useState} from 'react';

export default function App() {
  const [location, setLocation] 
  = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10)

  });
  const {marginTop, marginLeft} = location;

function onPress(evt){
   

console.log('====================================');
var x = evt.nativeEvent.locationX;
console.log('====================================');
console.log(x);
console.log('====================================');
var y = evt.nativeEvent.locationY;
console.log('====================================');
setLocation({
  x: x,
  y: y,
  marginLeft: x,
  marginTop: y

})


}
function onMove(evt){
console.log('====================================');
console.log(location);
console.log('====================================');

}
  return (
    <View style={styles.container}
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder={()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
    
    >

       <Animated.Image
       source = {meo}
       style={{marginLeft: marginLeft, marginTop: marginTop,width:100,height:100}}
       >

      </Animated.Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },
});
