import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import anh from'./assets/circle.png';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.anh}>
        <Image source={anh}>

        </Image>
      </View>
      <View style={styles.above1}>
        <Text>
        GROW YOUR BUSINESS
        </Text>
      </View>
      <View style={styles.above2}>
        <Text>
        We will help you to grow your business using online server
        </Text>
      </View>
      <View  style={styles.wrapbtn}>
        <Button title='LOGIN' style={styles.btn}></Button>
        <Button title='Sign Up'></Button>
      </View>
      <View style={styles.above3}>
        <Text>
         HOW WE WORK?
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
