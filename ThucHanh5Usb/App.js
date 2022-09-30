import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { Rating} from 'react-native-ratings';
import  FlatListData from './FlatListData'
import Xe from './assets/Xe.png'
import Tim from './assets/tim.png'
import Vector from './assets/Vector.png'
import Cham from './assets/3cham.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={Vector}></Image>
      <View style={{
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        flex:0.5,
        
      }}>
      <Image source={Tim}></Image>
      <Text>Dây cáp usb</Text>

      </View>
      <Image source={Xe}></Image>
      <Image source={Cham}></Image>


      </View>
      <FlatList data={FlatListData}
      renderItem={
        ({item,index})=>{
          return(
              <Items name={item.name} star={item.star} img={item.img} gia={item.price} dis={item.discount} buy={item.buy}></Items>
          );
        }
      }
      keyExtractor={(item, index) => index}
      numColumns={2}
      />
  
      <StatusBar style="auto" />
    </View>
  );
}

const Items=({name,star,img,gia,dis,buy})=>{
  return(

  <TouchableOpacity style={styles.item}>
        <Image source={{uri:img}} style={styles.img}></Image>
        <Text>{name}</Text>
        <View style={{flexDirection:'row'}}>
          <Rating
          type='custom'
          imageSize={20}
          ratingCount={5}
          startingValue={star}
          tintColor="#FBE41B"
          ratingBackgroundColor="#FBE41B"
          />
        <Text style={{fontSize:15,
        marginLeft:15,
        }}>{buy}</Text>      
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:15,
        marginLeft:15,
        fontWeight:'bold',
        }} >{gia}</Text>
        <Text style={{fontSize:15,
        marginLeft:15,
        color:'grey',
        }}>{dis}</Text>

        </View>
      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({  
  container: {
    flex: 1,
   // backgroundColor: 'red',
    marginTop:50,
   

  },
  header:{
    backgroundColor:'#1BA9FF',
    flexDirection:'row',
    height:50,
    alignItems:'center',
    justifyContent:'space-between',
  },
  item:{

    marginTop:15,
    flex:0.5,
  },
  img:{
    marginLeft:10,
     height:120,
     width:160,
  }

});

