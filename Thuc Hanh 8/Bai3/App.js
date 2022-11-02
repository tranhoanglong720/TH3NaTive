import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Animated } from 'react-native';
import meo from './meo.png';
import chuot from './chuot.png';
import { useState } from 'react';

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
  const [locationC, setLocationC] 
  = useState({
    x: null,
    y: null,
    marginLeftC: new Animated.Value(10),
    marginTopC: new Animated.Value(10)

  });
  const {marginTopC, marginLeftC} = locationC;
  console.log("Left:",marginLeftC)
function onPressMeo(evt){
console.log('====================================');
var x = evt.nativeEvent.locationX;
console.log('====================================');
console.log("meox:",x);
console.log('====================================');
var y = evt.nativeEvent.locationY;
console.log("meoy:",y);
console.log('====================================');
setLocation({
  x: x,
  y: y,
  marginLeft: x,
  marginTop: y

})


}
function onMoveMeo(evt){
console.log('====================================');
console.log("Meo:",location);
console.log('====================================');

}
function onPressChuot(evt){
   

  console.log('====================================');
  var x = RandomNumberX;
  console.log('====================================');
  console.log("x:",x);
  console.log('====================================');
  var y = RandomNumberY;
  console.log('====================================');
  console.log("y:",y);
  setLocationC({
    x: x,
    y: y,
    marginLeftC:RandomNumberX,
    marginTopC: RandomNumberY
  
  })  
  }
  function onMoveChuot(evt){
  console.log('====================================');
  console.log("Chuot:",locationC);
  console.log('====================================');
  }
  return (
    <View style={styles.container}
    onStartShouldSetResponder={()=>true}
    onMoveShouldSetResponder={()=>true}
    onResponderGrant={onPressMeo}
    onResponderMove={onMoveMeo} 
  >
     <Animated.Image
     source = {meo}
     style={{marginLeft: marginLeft, marginTop: marginTop,width:100,height:100}}
     >
    </Animated.Image>
    <Animated.Image
        onStartShouldSetResponder={()=>true}
        onMoveShouldSetResponder={()=>true}
        onResponderGrant={onPressChuot}
      
        onResponderMove={onMoveChuot}
     source = {chuot}
     style={{marginLeft: marginLeftC, marginTop: marginTopC,width:100,height:100}}
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
