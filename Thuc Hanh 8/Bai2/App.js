import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Animated, TouchableOpacity } from 'react-native';
import chuot from './chuot.png';
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
  var RandomNumberX = Math.floor(Math.random() * 300) + 1 ;
  var RandomNumberY = Math.floor(Math.random() * 200) + 1 ;
function onPress(evt){
   

console.log('====================================');
var x = RandomNumberX;
console.log('====================================');
console.log("x:",x);
console.log('====================================');
var y = RandomNumberY;
console.log('====================================');
console.log("y:",y);
setLocation({
  x: x,
  y: y,
  marginLeft:RandomNumberX,
  marginTop: RandomNumberY

})


}
function onMove(evt){
console.log('====================================');
console.log(location);
console.log('====================================');
}
  return (
    <View style={styles.container}    
    >   
      <Animated.Image
        onStartShouldSetResponder={()=>true}
        onMoveShouldSetResponder={()=>true}
         onResponderGrant={onPress}
         onResponderMove={onMove}
       source = {chuot}
       style={{marginLeft: marginLeft, marginTop: marginTop,width:100,height:100}}
       >

      </Animated.Image>
      <Animated.Image
        onStartShouldSetResponder={()=>true}
        onMoveShouldSetResponder={()=>true}
         onResponderGrant={onPress}
         onResponderMove={onMove}
       source = {chuot}
       style={{marginLeft: marginLeft, marginTop: marginTop,width:100,height:100}}
       >

      </Animated.Image>
      <Animated.Image
        onStartShouldSetResponder={()=>true}
        onMoveShouldSetResponder={()=>true}
         onResponderGrant={onPress}
         onResponderMove={onMove}
       source = {chuot}
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
