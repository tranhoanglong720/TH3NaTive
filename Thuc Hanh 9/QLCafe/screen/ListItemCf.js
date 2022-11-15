import React, { createContext,useState,useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Image,ImageBackground, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AnhList from '../assets/Listanh.png';
import { FontAwesome } from '@expo/vector-icons';
export var ListOrderContext = createContext();
function ListItemCf({navigation}) {
    const [listcf,setlistcf]=useState([]);
    const [arrTemp, setarrTemp] = useState([]);
 
    useEffect(() => {
        getListProducts();
    }, [])
  
    const getListProducts= ()=>{
        const apiURL = "https://6371f10f025414c63701ba95.mockapi.io/ListCf";
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setlistcf(resJson)
        }).catch((error) => {
            console.log("Error: ", error);
        })
    }
    ListOrderContext =createContext({arrTemp : arrTemp});
    function addList(item) { 
        console.log(item);           
        var obj = item;
        obj["amount"] = "1";
        setarrTemp([...arrTemp, obj]);
        navigation.navigate("CfItem");
    }
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
               <FlatList
               data={listText}
               horizontal={true}
               renderItem={
                
                    ({item,index})=>{
                        return(
                            <ContentText name={item.name}></ContentText>                
                        );
                    }              
               }
               />             
           </View>
           <View style={styles.content_bot}>
               <FlatList 
               data={listcf}
               keyExtractor={item => `key-${item.id}`}
               numColumns="2"
               renderItem={
                ({item,index})=>{
                    return(
                <View style={styles.item_bot}>
                     <Feather name="heart" size={24} color="black" />
                    <Image source={{uri: item.img}} style={{width:150,height:100,alignItems:'center',justifyContent:'center'}} />
                    <View style={{flexDirection:"row",                     
                        width:180,              
                    justifyContent:'space-around',                   
                     }}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#FF9900'}}>${item.prince}</Text>
                    </View>
                    <View style={{
                    flex:0.6,                    
                    flexDirection:"row",
                  
                    //alignItems:'flex-start',
                   
                    }}>
                        <View style={{flexDirection:"row",
                            
                            justifyContent:'flex-start',
                            
                            }}>
                            <AntDesign name="staro" size={24} color="black" />
                            <Text>{item.rate}</Text>
                            <Text>(</Text>
                            <Text style={{color:'yellow'}}>25</Text>
                            <Text>Rivews)</Text>
                        </View>
                        <TouchableOpacity style={styles.giohang} onPress={() => {
                    addList(item);
                  }}>
                            <AntDesign name="shoppingcart" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
               </View>
                    );
                }
               }

               />
               
           </View>
        </View>
    </View> 
    );
}
const listText=[

    {        
        name: "All Coffee",
    },
    {        
        name: "Hot Coffees",
    },
    {        
        name: "Hot Tea",
    },
    {        
        name: "Cold Coffee",
    },
    {        
        name: "Hot &Cold Coffee",
    },
    {        
        name: "All Tea",
    },
    {        
        name: "Cold Tea",
    },
]

const ContentText=({name})=>{
    return(
    <View style={styles.content_mid_item}>
        <Text style={styles.text_content_mid_item}>{name}</Text>
        
    </View>
    
    );
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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
        backgroundColor:'#FFCC99',
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
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
       backgroundColor:'#DAA77B',    
       marginLeft:10,  
    },
    text_content_mid_item:{
        //padding:10,
        fontSize:20,
        textAlign:'center',
        color:'white',
        fontWeight:'500',
    },
    content_mid:{
        marginTop:5,
        padding:5,
        flex:0.1,
    },
    content_bot:{
        flex:1,
        justifyContent:'space-around',
    },
    item_bot:{
        flex:0.5,
        justifyContent:'space-between',
        alignItems:'flex-end',
        backgroundColor:'#CCCCFF',
        borderWidth:2,
        borderRadius:15,
        height:250,
        margin:10,
    },
    giohang:{
        
        flex:1,
        backgroundColor:'#CC9900',
        //borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:10,
        borderLeftColor:'#CC9900',
        //borderBottomLeftRadius: 10,
        borderBottomRightRadius:15,     
        borderTopLeftRadius: 30,
        //borderTopRightRadius: 15,
    }
})
export default ListItemCf;