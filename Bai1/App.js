import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import anh from'./assets/circle.png';
import { Button } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient 
      colors={["rgba(189, 246, 198, 0)","#BDF6C6"]}
      style={styles.bgcolor}
      start={{ x: 0, y: 0}}
      end={{ x: 1, y: 1 }}
      >
     
      <View style={styles.anh}>
        <Image source={anh}>

        </Image>
      </View>
      <View style={styles.above1}>
        <Text style={{fontSize:25,
                      fontWeight:'700',
                      
                      height:58,
                      textAlign:'center',
                      lineHeight:30,
       }}>
        GROW{"\n"}YOUR BUSINESS
        </Text>
      </View>
      <View style={styles.above2}>
        <Text style={{fontSize:20,
                      fontWeight:'700',
                      textAlign:'center',
                      }}>
        We will help you to grow your business using online server
        </Text>
      </View>
      <View  style={styles.wrapbtn}>
        <Button title='LOGIN' style={styles.btn}></Button>
        <Button title='Sign Up'style={styles.btn}></Button>
      </View>
      <View style={styles.above3}>
        <Text style={{fontSize:20,
                      fontWeight:'700',
                      textAlign:'center',
                      }}>
         HOW WE WORK?
        </Text>
      </View>
 
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgcolor:{
    width:"100%",
    height:"100%",
  },
  anh:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    
    alignItems:'center',
   
    marginTop:125,
  },
  above3:{
    flex:1,
    alignItems: 'center',
    
  
  },
  above1:{
      flex:1,
      alignItems: 'center',
      
      justifyContent: 'flex-end',
     
    
  },
  above2:{
    flex:1,

    alignItems:'center',
    justifyContent:'center',
    
  },
  
  wrapbtn:{
    flex:1,
    
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn:{
    // color:"#E3C000", 
    // tintColor:"black",
    backgroundColor:"#E3C000", 
  
    fontSize:15,
    width:125,
    height:45,
    
  }
});
