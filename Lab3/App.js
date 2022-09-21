import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { Button, TextInput } from "@react-native-material/core";
import Anh from'./assets/book.png';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentTop}>       
      <Image source={Anh} style={styles.contentAnh} ></Image>        
      <View style={styles.contentTop1}>
          <View style={styles.TextHeder}>
          <Text style={{
            fontSize:15,
            fontWeight:'bold',
          }}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={{
            fontSize:15,
            fontWeight:'bold',
          }}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{
            fontSize:15,
            color:'red',
            fontWeight:'700',
          }}>141.800 đ</Text>
          <Text style={{
            fontSize:15,
            fontWeight:'700',
            textDecorationLine:'line-through',
            color:'gray',
          }}>141.800 đ</Text>
           </View >
          <View style={styles.Mua}>
      <View style={styles.Mua_Add}>
            <Text style={{
            fontSize:15,
            paddingLeft:15,
          
            paddingRight:15,
          
            backgroundColor:'gray',
            fontWeight:'bold',
          }}>-</Text>
            <Text style={{
            fontSize:15,
            fontWeight:'bold',
          }}>1</Text>
            <Text style={{
            fontSize:15,
            paddingLeft:15,
            
            paddingRight:15,
              
            backgroundColor:'gray',
            fontWeight:'bold',
          }}>+</Text>
      </View>            
      <Text style={{
            fontSize:15,
            fontWeight:'bold',
            color:'blue',
            marginRight:50,
          }}>Mua Sau</Text> 
      
           </View>

      </View>

        </View>
      <View style={styles.contentMid}>
        <Text style={{
            fontSize:12,
            fontWeight:'bold'
          
          }}>Mã giảm giá đã lưu</Text>
        <Text style={{
            fontSize:15,
            marginLeft:30,
            color:'blue',
          }}>Xem tại đây</Text>
      </View>      
      <View style={styles.contentBot}>
          <View style={styles.contentBot_Nut}>
            <Text style={{
              backgroundColor:'yellow',
              paddingLeft:20,
              paddingRight:20,

            }}></Text>
            <Text style={{
             
              fontSize:15,
              fontWeight:'bold',

            }} >Mã giảm giá  </Text>
          </View>
          <Text style={{
            backgroundColor:'#0A5EB7',
            paddingLeft:15,
            paddingRight:15,
            paddingTop:8,
            paddingBottom:8,
            fontSize:15,
            fontWeight:'bold',
            color:'white',
          }}>Áp dụng</Text>
      </View>
      </View>
      <View style={styles.content1}>

       <View style={styles.content1_Vien}>
          <Text style={{
            fontWeight:'bold',
          }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{
            color:'#134FEC',
          }}>Nhập tại đây?</Text>
       </View>
      </View>
      <View style={styles.content2}>
      <Text style={{
        fontSize:20,
        marginRight:150,
        fontWeight:'bold',
       
      }}>Tạm tính</Text>
      <Text style={{
        fontSize:20,
        color:'red',
        fontWeight:'800',
      
      }}>141.800 đ</Text>
    </View>
    <View style={styles.footer}>
      <View style={styles.footer_Top}>
      <Text style={{
        color:'#808080',
        fontSize:20,
      
        fontWeight:'800',
      }}>Thành tiền</Text>
      <Text  style={{
        fontSize:20,
        color:'red',
        fontWeight:'800',
      
      }}>141.800 đ</Text>
      
      </View>
      <View style={styles.footer_Bot}>
        
      <Button 
        color='red'
       
        title='TIẾN HÀNH ĐẶT HÀNG'
      
        style={{
          paddingTop:10,
          paddingBottom:10,
          fontWeight:'bold',
          fontSize:'80',
        }}/>
      </View>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  header:{
    flex:1,
    //backgroundColor:'red',
    marginTop:60,
  
    //alignItems:'center',
   justifyContent:'space-between',
   
  },

  contentTop:{
      flex:1,
   
      flexDirection:'row',
      // backgroundColor:'red',
      // paddingBottom:54,
      //justifyContent:'center',
      justifyContent:'space-between',
      //alignItems:'flex-start',
  },
  contentTop1:{
    flex:0.9,
  
    justifyContent:'space-between',
    alignContent:'center',
  },
  contentAnh:{
    height:150,
   
  },
  TextHeder:{
    
    flex:1,
   //paddingBottom:50,
    justifyContent:'space-between',
    //alignItems:'flex-start',
  },
  Mua:{
    flex:0.5,
    
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  Mua_Add:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  contentMid:{
    //backgroundColor:'red',
    flex:0.3,
  
    flexDirection:'row',
    //justifyContent:'space-between',
   alignItems:'center',
    
  },
  contentBot:{
    flex:0.4,   
    flexDirection:'row',
   justifyContent:'space-around',
    alignItems:'center',
  },
  contentBot_Nut:{
    flexDirection:'row',
    flex:0.5,
    borderWidth:2,
    padding:7,
    borderColor:'black',
    justifyContent:'space-between',
  },
  content1:{     
    flex:0.4,  
    backgroundColor:'gray',
    justifyContent:'center',
},
content1_Vien:{
  flex:0.5,
  
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},
content2:{
  flex:0.2,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},
footer:{
  flex:1,
  backgroundColor:'gray',
  justifyContent:'flex-end',
},
footer_Top:{
  flex:0.2,
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},
footer_Bot:{

},
});
