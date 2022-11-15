import React,{useContext, useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Image, FlatList,TextInput, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ListOrderContext } from "./ListItemCf";
function CfItem({navigation}) {
    const [listitem,setlistitem]=useState([]);
    const [rerender, setRerender] = useState(false);
    var { arrTemp } = useContext(ListOrderContext);
    const [price, setPrice] = useState("4.53");
    const [totalPrice, setTotalPrice] = useState("5.53");
    useEffect(()=>{
    setlistitem(arrTemp);
    var princeNow=0;
    arrTemp.forEach(element => {    
        princeNow +=element.amount *element.prince;
    });
    setPrice(princeNow.toFixed(2));
    var totalPriceNow = (princeNow + 12.6).toFixed(2);
    setTotalPrice(totalPriceNow + "");
    },[rerender]);
    console.log(arrTemp);
    function add(index){
        var amount= Number.parseInt(listitem[index].amount)+1;
        arrTemp[index].amount=amount+"";
        setRerender(!rerender);
    }
    function sub(index){
        var amountNow= Number.parseInt(listitem[index].amount);
        var amount= Number.parseInt(listitem[index].amount)-1;
        arrTemp[index].amount=amount+"";
        setRerender(!rerender);
    }
    return (  
        <View style={styles.container}>
           
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={50} color="black" onPress={() => {navigation.navigate('BottomTabNavigator')}}/>
                <Text style={styles.textheader} >Check Out</Text>
                <MaterialCommunityIcons name="message-badge-outline" size={50} color="black" />
            </View>
        
            <View style={styles.content}>
                <FlatList
                data={listitem}
                renderItem={({item,index})=>{
                    return(
                        <View style={styles.itemcf}>
                            <Image source={{uri: item.img}} style={styles.img}></Image>
                            <View style={styles.itemcf_content}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                                <View style={{flexDirection:"row",                          
                                            justifyContent:'space-around',  
                                                           
                                            }}>
                                                <AntDesign name="staro" size={24} color="black" />
                                                <Text>{item.rate}</Text>
                                                <Text>(</Text>
                                                <Text style={{color:'yellow'}}>25</Text>
                                                <Text>Rivews)</Text>
                                </View>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'#FF9900'}} >${item.prince}.00</Text>
                            </View>  
                            <View style={styles.btnwrap}>
                                <TouchableOpacity
                                    style={styles.btnAddSub}   onPress={() => { add(index);}}>
                                    <Text style={styles.txtAddSub}>+</Text>
                                </TouchableOpacity>
                                <TextInput
                                        value={item.amount}
                                        style={styles.amount}
                                        editable={false}
                                        underlineColor="white"
                                />
                                <TouchableOpacity
                                    style={styles.btnAddSub}  onPress={() => { sub(index);}}>
                                    <Text style={styles.txtAddSub}>-</Text>
                                </TouchableOpacity>
                            </View>                   
                        </View>
                    );
                }}
              
                />               
            </View>
            
            <View style={styles.req}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Special Request To US</Text>
                <View style={styles.req_text}>
                <FontAwesome name="search-plus" size={24} color="#FF9900" />
                    <Text style={{color:'#FF9900',margin:5}}>Add your note here</Text>
                </View>
            </View>
            <View style={styles.code}>
                <View style={styles.code_text}>
                    <Text style={{fontSize:18}}>Apply Promo Code</Text>
                    <Text>Use promo code for discounts</Text>
                </View>
                <TouchableOpacity style={styles.req_text}>
                <MaterialIcons name="post-add" size={24} color="#FF9900" />
                    <Text style={{color:'#FF9900',margin:5}}>Add your note here</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.total}>
                <View style={styles.total_text}>
                    <Text style={{fontWeight:'600'}}>Item total</Text>
                    <Text style={{color:'#FF9900'}}>${price}</Text>
                </View>
                <View style={styles.total_text}>
                    <Text style={{fontWeight:'600'}}>Delivary charge</Text>
                    <Text style={{color:'#FF9900'}}>$10.00</Text>
                </View>
                
                <View style={styles.total_text}>
                    <Text style={{fontWeight:'600'}}>VAT</Text>
                    <Text style={{color:'#FF9900'}}>$2.60</Text>
                </View>
                <View>
                    <Text>-------------------------------------
                    ---------------------------------------------
                    --------------</Text></View>
                <View style={styles.total_text}>
                    <Text style={{fontWeight:'600'}}>Grand total</Text>
                    <Text style={{color:'#FF9900'}}>${totalPrice}</Text>
                </View>
            </View>
           
            <TouchableOpacity style={styles.btnCard}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>PROCEED TO PAYMENT</Text>
            </TouchableOpacity>
           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFEBCD",
      marginTop:50,
     justifyContent:'space-between',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textheader:{
        fontSize:24,
        fontWeight:'bold',
        
    },
    itemcf:{
        
        flexDirection:'row',
        flex:1,
        
        margin:5,
        borderWidth:1,
        borderRadius:18,
        justifyContent:'space-between',
        backgroundColor:'#FFCC66',  
    },
    itemcf_content:{
        flexDirection:'column',
        justifyContent:'center',
        
    },
    btnwrap:{
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#FFCC99',
        paddingLeft:10,
        // borderTopRightRadius:15,
        // borderBottomRightRadius:15,
        borderRadius:15,
        marginRight:5,
    },
    btnAddSub:{
        borderRadius: 100,
        width: 28,
        height: 28,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'rgb(235,235,235)',
    },
    amount:{
        width: 30       ,
        height: 20,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "#FFCC99",
    },
    img:{
        width:150,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000033',
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,   
     },
     content:{
          flex:0.6,
        
     },
     req:{
        flexDirection:'column',
        margin:5,

     },
     req_text:{
        flexDirection:'row',
        borderWidth:2,
        backgroundColor:'#FFCC66',
        borderColor:'#FFCC99',
        borderRadius:10,
        justifyContent:'center',   
       alignItems:'center',  
        height:80,
        
     },
     code:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:5,
        borderWidth:2,
        borderColor:'#F5F5F5',
        borderRadius:10,
     },
     code_text:{
        alignItems:'center',
        justifyContent:'center',
     },
     total:{
        flexDirection:'column',
        margin:10,
     },
     total_text:{
        flexDirection:'row',
        justifyContent:'space-between',
     },
     btnCard:{
        justifyContent:'center',
        backgroundColor:'#FFCC66',
        alignItems:'center',
        flex:0.2,
        borderRadius:15,
        marginLeft:20,
        marginRight:20,
     }

});
export default CfItem;