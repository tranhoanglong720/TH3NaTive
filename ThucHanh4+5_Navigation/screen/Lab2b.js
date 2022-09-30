import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,Text, View,Image, TouchableOpacity } from 'react-native';
import React ,{ useState } from 'react';
export default function Lab2b({navigation}){
    var xanh = require('../assets/vsmart_live_xanh.png');
    var den=require('../assets/den.png');
    var do_r=require('../assets/red.png');
    var xanhduong=require('../assets/bac.png');
    var image = { xanh, do_r, den, xanhduong };
    var [Anh,SetAnh]=useState(image.xanh);
    var [Mau,setMau]=useState("");
    var [CungCap,setCungCap]=useState("");
    var [Gia,SetGia]=useState("");
   
    function MauDo(){
        return(
        SetAnh(image.do_r),
        setMau(Mau = "Màu: Đỏ"),
        setCungCap(CungCap = "Cung cấp bởi Tiki Tradding"),
        SetGia(Gia = "1.790.000 đ" )
        );
    }
    function MauXanh(){
        return(
            SetAnh(image.xanh),
        setMau(Mau="Màu: Xanh"),
        setCungCap(CungCap="Cung cấp bởi Tiki Tradding"),
        SetGia(Gia="1.790.000 đ")
        );
    }
    function MauXanhDuong(){
        return(
            SetAnh(image.xanhduong),
        setMau(Mau="Màu: Xanh Dương"),
        setCungCap(CungCap="Cung cấp bởi Tiki Tradding"),
        SetGia(Gia="1.790.000 đ")
        );
    }
    function MauDen(){
        return(
        SetAnh(image.den),
        setMau(Mau="Màu: Đen"),
        setCungCap(CungCap="Cung cấp bởi Tiki Tradding"),
        SetGia(Gia="1.790.000 đ")
        );
    }
    return (  
            <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                    <Image source={Anh} style={{height:150 ,width:150}}></Image>
                    <View style={styles.header_right}>
                    <Text >Điện Thoại Vsmart Joy 3 {"\n"} Hàng chính hãng</Text>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'bold'
                        
                    }}>{Mau}</Text>     
                    <Text style={{
                        fontSize:18,
                        fontWeight:'bold'

                    }}>{CungCap}</Text>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'bold'
                    }}>{Gia}</Text>
                    </View>
                    </View>
                     <View style={styles.Footer}>
                        <Text style={{
                            fontSize:18,
                        }} >Chọn một màu bên dưới:</Text>
                     
                         <TouchableOpacity activeOpacity={0.2} style={{
                            backgroundColor:'#C5F1FB',
                            alignSelf: 'center', width: 80, height: 80, marginTop: 20 
                        }}onPress={MauXanh} ></TouchableOpacity>
                       
                       
                        <TouchableOpacity activeOpacity={0.2} style={{
                            backgroundColor:'#F30D0D',
                            alignSelf: 'center', width: 80, height: 80, marginTop: 20 
                        }}onPressIn={MauDo} ></TouchableOpacity>
                     
                       
                        <TouchableOpacity activeOpacity={0.2} style={{
                            alignSelf: 'center', width: 80, height: 80, marginTop: 20 ,
                            backgroundColor:'#000000',
                            
                        }}onPressIn={MauDen}></TouchableOpacity>
                       
                        <TouchableOpacity activeOpacity={0.2} style={{
                            backgroundColor:'#234896',
                            alignSelf: 'center', width: 80, height: 80, marginTop: 20 
                        }} onPressIn={MauXanhDuong}></TouchableOpacity> 
                      
                      <TouchableOpacity onPress={() => navigation.navigate('Screen1',{link: Anh,})} activeOpacity={0.2} style={{ marginTop: 60, flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 350, height: 50, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#1789ff' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 18, lineHeight: 20, fontWeight: 'bold', color: 'white' }}>XONG</Text>
                </TouchableOpacity>
                    </View> 
                    <StatusBar style="auto" />
            </SafeAreaView>  
    );
   
};
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      
      },
    header:{
        flex:0.3,
       
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    header_right:{
        flex:1,
    },
    Footer:{
    flex:1,
    backgroundColor:'#C4C4C4',
    },
});
