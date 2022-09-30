import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import Anhbia from '../assets/congai.jpg';
function CustomItem ({ Listitem}) {
    return (  
        <SafeAreaView style={styles.container}>
            <Image source={Anhbia} style={styles.anh}></Image>
            <View style={styles.content}>
                    <Text style={{
                fontSize:16,
                fontWeight:'bold',
                }}>{Listitem.name}</Text>
                <Text style={{ 
                fontSize:16,
                fontWeight:'bold',
                 }} >{Listitem.email}</Text>
            </View>
            <View style={styles.btnbao}>
            <TouchableOpacity style={styles.btn}><Text style={{
                color:'white',
                fontWeight:'bold',
            }}>Chat</Text></TouchableOpacity>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:0.1,
        flexDirection:'row',
      
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
    }

});
export default CustomItem ;