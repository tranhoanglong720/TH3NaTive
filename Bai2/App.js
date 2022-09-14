import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import anh from'./assets/lock.png';
import { Button,TextInput } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'; 
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["rgba(189, 246, 198, 0)","#BDF6C6"]} style={styles.bgcolor}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>

      
      <View style={styles.anh}>
        <Image source={anh}>

        </Image>
      </View>
      <View style={styles.above1} >
        <Text style={{
              fontSize:25,
              textAlign:'center',
              fontWeight:'700',

        }}>FORGET{"\n"}PASSWORD</Text>
      </View>
      <View style={styles.above2}>
        <Text style={{
              fontSize:15,
              textAlign:'center',
              fontWeight:'700',}}
              >Provide your account`s email for which you{"\n"}want to reset your password</Text>
      </View>
      <View style={styles.inputtext}>
        <TextInput  placeholder='Email' style={{
           width:350,
           height:80,
           fontSize:20,
        }}  leading={props => <Icon name="email" {...props} />}></TextInput>
      </View>
      <View style={styles.wrapbtn}>
        <Button title="NEXT" style={{
            width:350,
            height:50,
            fontSize:20,
            textAlign:'center',
            backgroundColor:'#E3C000',
           
        }}></Button>
      </View>
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
  anh:{
    flex: 1,
    marginTop:100,
    justifyContent:"flex-end",
    alignItems:'center',
  },
  bgcolor:{
    width:"100%",
    height:"100%",
  },
  above1:{
    flex: 1,
    justifyContent:"flex-end",
    alignItems:'center',
  },
  above2:{
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
  
   
    
  },
  inputtext:{
    flex: 1,
    justifyContent:"flex-start",
    alignItems:'center',
    
  
  },
  wrapbtn:{
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:100,
  }
});
