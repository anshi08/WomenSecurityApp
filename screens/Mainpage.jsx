import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground ,Pressable } from 'react-native';
import IntroPage from "../assets/W3.jpg";
import Buttons from '../components/Buttons';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={IntroPage} resizeMode="cover" blurRadius={1} style={styles.logo}>
        <Text style={styles.title}>Women's Security App</Text>
      <Text style={styles.subtitle}>~Trust your gut instinct</Text>
      <Buttons navigation={navigation}/>
    </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    justifyContent: 'center', 
  },
  title : {
    marginTop : -450,
    color: 'white',
    fontSize: 30,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0'
   },
   subtitle : {
    fontSize: 15,
    fontWeight : 'bold',
    marginLeft: '50%'
   },
   btncontainer : {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems : 'center',
    
   },
   btn1 : {
      backgroundColor: '#fffff0',
      padding : 15,
      borderRadius : 10,
      marginTop : 60 ,
      marginHorizontal : '5%',
   },
   btn2 : {
    backgroundColor: '#fffff0',
    padding : 15,
    borderRadius : 10,
    marginTop : 60 ,
    marginHorizontal : '5%',
    width : '80%',
    textAlign: 'center'
   }
});
