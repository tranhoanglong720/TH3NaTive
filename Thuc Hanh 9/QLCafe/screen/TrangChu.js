import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import AnhTrang from '../assets/Trangchu.png';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
function TrangChu({navigation}) {
    return ( 
        <View style={styles.container}>
            <Image source={AnhTrang} style={styles.img}></Image>
            <View style={styles.content}>
                <Text style={styles.about}>DISCOVER</Text>
                <Text style={styles.about}>premium coffee</Text>
                <Text style={styles.about}>around you</Text>
            
            <View style={styles.btnabout}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BottomTabNavigator')}>
                <FontAwesome5 name="facebook" size={24} color="blue" />
                <Text style={styles.textbtn}>Sign With FaceBook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                 <FontAwesome name="google" size={24} color="yellow" />
                <Text style={styles.textbtn}>Sign With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity >            
                <Text style={styles.textbtnA}>Don`t have an account ?</Text>
            </TouchableOpacity>
            <TouchableOpacity >            
                <Text style={styles.textbtnB}>REGISTER</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    img:{
        width:420,
        height:350,
    },
    about:{
        marginLeft:20,
        fontSize:34,
        fontWeight:'bold',
        color:'white',
        fontStyle:'normal',

      
    },
    content:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'flex-start',
    },
    btnabout:{
        flex:1,
    
        justifyContent:'flex-end'
    },
    btn:{
        flex:0.3,
        borderWidth:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'brown',
        marginTop:20,
        
    },
    textbtn:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginLeft:10,
        textAlign:'center',
        
    },
    textbtnA:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
        color:'gray',
        marginLeft:10,
        textAlign:'center',
        
    },
    textbtnB:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
        color:'yellow',
        marginLeft:10,
        textAlign:'center',
        
    },
  });
export default TrangChu;