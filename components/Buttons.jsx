import { Pressable, StyleSheet, Text, View } from 'react-native';


const Buttons = ({navigation}) => {
    return (
    <View style={styles.btncontainer}>
        <Pressable onPress={()=>navigation.navigate('SignIn')}><Text style={styles.btn1}>Sign In</Text></Pressable> 
        <Pressable onPress={()=>navigation.navigate('SignUp')}><Text style={styles.btn2} >Sign Up</Text></Pressable>
        </View>
    )
}

export default Buttons


const styles = StyleSheet.create({
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
      textAlign: 'center'
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
})