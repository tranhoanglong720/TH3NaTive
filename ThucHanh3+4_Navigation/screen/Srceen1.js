import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';
import { Button } from "@react-native-material/core";
import Sao from'../assets/Sta.png';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect,useState } from 'react';
import {useRoute } from '@react-navigation/native';
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function Screen1({navigation}) {
  const route = useRoute();
  var xanh = require('../assets/vsmart_live_xanh.png');
  var [Anh,SetAnh]=useState(xanh);
    useEffect(()=>{
      if(route.params !=null)
      SetAnh(route.params.link)
    });
  return (
   
    <SafeAreaView style={styles.container}>

      <View style={styles.anh}>
        <Image source={Anh} style={{height:400,width:300}}></Image>
      </View>
      <View style={styles.content}>
        <Text style={{
          fontSize:15,
          fontWeight:'400',

        }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        <View style={styles.content_Sao}>
        <Image source={Sao}></Image>
        <Image source={Sao}></Image>
        <Image source={Sao}></Image>
        <Image source={Sao}></Image>
        <Image source={Sao}></Image>    
        <Text style={{
          fontSize:15,
          fontWeight:'400',
          marginLeft:30
        }}>(Xem 828 đánh giá)</Text> 
        </View>
        <View style={styles.content_Tien}>
          <Text style={{
          fontSize:18,
          fontWeight:'700',

        }}>1.790.000 đ</Text>
          <Text style={{
          fontSize:15,
          fontWeight:'700',
          color:'gray',
          paddingLeft:30,
          textDecorationLine:'line-through',
        }}> 1.790.000 đ</Text>
        </View>
        <View style={styles.content_Hoi}>
          <Text style={{
          fontSize:12,
          fontWeight:'700',
          color:'red',
        }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Text style={{
          fontSize:18,
          fontWeight:'700',
          marginLeft: 15,
          borderWidth:2,
          borderColor:'black',
          paddingLeft:7,
          paddingRight:5,
          borderRadius:70,
        }}>?</Text>
        </View>
        <Button onPress={() => navigation.navigate('Lab2b')} title='4 MÀU-CHỌN MÀU' color='white' style={{
          borderWidth:2,
          borderRadius:999,
          borderColor:'#C4C4C4',
          
        }}  trailing={props => <AntDesign name="rightcircleo" {...props} />  }/>
      </View>
      <View style={styles.footer}>
        <Button title='CHỌN MUA' color='red' tintColor='white' />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  anh:{
    flex:1,
   
    justifyContent:'center',
    alignItems:'center',
  },
  content:{
      flex:0.5,
      
      //alignItems:'flex-start',
      
      paddingLeft:20,
      paddingRight:20,
  },
  content_Sao:{
      flex:0.2,
      flexDirection:'row',
  
      alignItems:'center',
  },
  content_Tien:{
    flex:0.2,
    flexDirection:'row',
   
    justifyContent:'flex-start',
    alignItems:'center',
  },
  content_Hoi:{
    flex:0.3,
    flexDirection:'row',
  
    justifyContent:'flex-start',
    alignItems:'center',
  },
  footer:{
    flex:0.1,
 
    justifyContent:'center',
    paddingLeft:20,
    paddingRight:20,
  }
});
