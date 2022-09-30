import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,TouchableOpacity,Image, SafeAreaView } from 'react-native';
import CustomItem from './component/CustomItem';
import flatListData from './DataFlatList';
import Xe from './assets/Xe.png';
import vector from './assets/Vector.png'
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={vector} style={{height:20}}></Image>
        <Text style={{fontSize:20,
        fontWeight:'600',
        color:'white',
        
        }}>Chat</Text>
        <Image source={Xe}  style={{height:20}}></Image>
      </View>
      <Text style={{ fontSize:18,
        textAlign:'center',
      }}> Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!</Text>
      <View>
      <FlatList data={flatListData}
        renderItem={
          ({item,index })=>{
            return(
              <Custom name={item.name} shop={item.shop} img={item.img}></Custom>
            )
          }
        }>
      </FlatList>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
  
}
const  Custom= ({name,shop,img}) =>{
  return(
    <TouchableOpacity style={styles.item}>
    <Image source={{uri:img}} style={styles.anh}></Image>
    <View style={styles.content}>
            <Text style={{
        fontSize:16,
        fontWeight:'bold',
        }}>{name}</Text>
        <Text style={{ 
        fontSize:16,
        fontWeight:'bold',
         }} >{shop}</Text>
    </View>
    <View style={styles.btnbao}>
    <TouchableOpacity style={styles.btn}><Text style={{
        color:'white',
        fontWeight:'bold',
    }}>Chat</Text></TouchableOpacity>

    </View>
    <StatusBar style="auto" />
</TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50,
  },
 
  item:{
    marginTop:50,
    flex:0.1,
    flexDirection:'row',
   //  marginBottom:50,
  
},
btnbao:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
},
btn:{

    width:80,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    borderWidth:0.8,
    
},
content:{
    flex:0.4,
    justifyContent:'flex-start',
},
anh:{
    flex:0.3,
    width:80,
    height:80,
},
header:{
  height:40,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  backgroundColor:'#1BA9FF',
}
});
