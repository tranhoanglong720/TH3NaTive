import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Image,ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AnhList from '../assets/Listanh.png';
import { FontAwesome } from '@expo/vector-icons';
function ListItemCf({navigation}) {
    return ( 
    <View style={styles.container}>
        <View style={styles.header}>
            <Ionicons name="ios-menu" size={50} color="black" />
            <View style={styles.header_mid}>
                <EvilIcons name="location" size={40} color="yellow" style={{marginTop:15}}/>
                <View style={styles.header_mid_on}>
                    <Text style={styles.textheader}>Sukrabad,Dhaka</Text>
                    <View style={styles.header_mid_in} >
                    <Text style={styles.textheader}>Bangladesh</Text>
                    <AntDesign name="caretdown" size={14} color="yellow" style={{marginTop:5}}/>
                    </View>
                </View >    
            </View>
            <View style={styles.header_right}>
            <Feather name="message-square" size={40} color="black" />
            <Ionicons name="notifications-outline" size={40} color="black" />
            </View>
        </View>
        <View style={styles.content}>
            <ImageBackground source={AnhList} style={styles.img}>
            <View style={styles.content_circle}>
            <FontAwesome name="circle" size={14} color="yellow" style={{marginLeft:3}} />
            <FontAwesome name="circle" size={14} color="black" style={{marginLeft:3}}/>
            <FontAwesome name="circle" size={14} color="black" style={{marginLeft:3}}/>
            <FontAwesome name="circle" size={14} color="black" style={{marginLeft:3}}/>
            <FontAwesome name="circle" size={14} color="black" style={{marginLeft:3}}/>
            <FontAwesome name="circle" size={14} color="black" style={{marginLeft:3}}/>
            </View>
            </ImageBackground>
           <View style={styles.content_mid}>
               
           </View>
        </View>
    </View> 
    );
}
const ContentText=({name})=>{
    <View style={styles.content_mid_item}>
        <Text style={styles.text_content_mid_item}>{name}</Text>
    </View>
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      marginTop:50,

    },
    header:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    header_mid:{
       
        flexDirection:'row',
        
    },
    header_mid_in:{
        flexDirection:'row',
    
    },
    header_mid_on:{
        flexDirection:'column',
    },
    textheader:{
        fontSize:18,
        fontWeight:'600',
        color:'black',
    },
    header_right:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    content:{
        flex:1,
        backgroundColor:'yellow',
    },
    img:{
   
        borderRadius:50,
        marginLeft:5,
        width:400,
        height:180,
        marginTop:30,
        justifyContent:'flex-end',    
        alignItems:'center',
    },
    content_circle:{
        
        backgroundColor:'red',
        flexDirection:'row',
        marginTop:5,
        borderWidth:2,
        borderRadius:50,
       // alignItems:'center',
      
        justifyContent:'space-around',
    },
    content_mid_item:{
        borderWidth:2,
        borderRadius:100,
        backgroundColor:'#DAA77B',
        
    },
    text_content_mid_item:{
        fontSize:20,
        textAlign:'center',
        color:'white',
        fontWeight:'500',
    },
    
})
export default ListItemCf;