import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [Lists,setLists]= useState([]);
  const [Data,setData]= useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TextInput placeholder="Them Du Lieu" style={styles.textdulieu} onChangeText={(Data)=>{setData(Data)}} value={Data}/>
      <TouchableOpacity style={styles.btndulieu} onPress={()=>{setLists([...Lists, Data]);
      setData("");
      }}>
            <Text style={{textAlign:'center',
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            justifyContent:'center',
          }}>Add</Text>
          
      </TouchableOpacity>    
      
      </View>
      <View style={styles.mid}>

      <FlatList data={Lists}
        renderItem={
          ({item,index})=>{
            return(
              <CustomItem item={item} index={index} ></CustomItem>
            );
          }
        }
      >
      </FlatList>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const CustomItem=({item,index})=>{
  return(
  <View style={styles.content}>
      <Text style={
        {
          fontSize:18,
          fontWeight:'bold',
          textAlign:'center'
        }
      }>{index}</Text>
      <Text
      style={
        {
          fontSize:18,
          fontWeight:'bold',
        }
      }>{item}</Text>
 <TouchableOpacity style={styles.btnxoa} >
            <Text style={{textAlign:'center',
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            justifyContent:'center',
          }}>Xoa</Text>
          
      </TouchableOpacity>   
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    marginTop:80,
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
  },
  textdulieu:{
    width: 300,
    height:50,
    borderWidth:5,
    textAlign:'center',
    borderColor:'grey',
    marginBottom:10,
  },
  btndulieu:{
    width: 300,
    height:30,
    backgroundColor:'blue',
  },
  btnxoa:{
    width: 50,
    height:30,
    backgroundColor:'green',
  },
  content:{

    flex:0.8,
    borderWidth:5,
    borderRadius:50,
    marginBottom:5,
    borderColor:'grey',
    flexDirection:'row',
    justifyContent:'space-around',

  },
  mid:{
    flex:0.8,
    marginTop:80,
   
  }

});
