import { View,Text ,Image,StyleSheet,ImageBackground,TextInput} from "react-native"
import number from "../assets/T.png";

const Phone = ({navigation}) => {
    return <>
        <View style={styles.container}>
            <ImageBackground source={number} resizeMode="cover" blurRadius={1} style={styles.logo} /> 
            <TextInput
               placeholder="Enter Mobile Number"
               style={styles.input}
         />
        </View>
        <View>

        </View>
        </>
}

export default Phone

const styles = StyleSheet.create({
    container : {
       flex: 1,
      backgroundColor : '#ff4757'
},
    logo: {
        flex: 1,
        justifyContent: 'center', 
        marginTop : 70,
        height : 500,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        // marginTop : -350,
        // color: 'black',
        // fontSize: 15,
        // lineHeight: 50,
        // backgroundColor: 'white'
 },
})