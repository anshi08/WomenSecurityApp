import { View , Text,Image,StyleSheet, TextInput,Pressable} from "react-native";
import login from '../assets/person.png';
import mail from '../assets/email2.png';
import pw from '../assets/pw.png';
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';




const SignUp = ({navigation}) => {

  const [password , setpassword] = useState(true)
  const [img , showimg] = useState("eye-with-line")


     //Function for making Password visible or Not !
   
     function showpasswordHandler() {
      //checking if the state have eye as value them making it as #Eye-With-Eye
      if(img === "eye"){
         showimg("eye-with-line")
         setpassword(true)
      }
      else {
         showimg("eye")
         setpassword(false)
      }
   }


    return <>
       <View >
        <Text style ={styles.text}>Sign Up</Text>
        <View style ={styles.main}>
        <Text style ={styles.subtitle }>Sign-In to get started </Text>
        </View>
         <View style={styles.container}>
            <View style = {styles.SectionStyle}>
              <Image source = {login} style={styles.ImageStyle} />
              <TextInput
              style={{flex:1}}
              placeholder="Name"
              underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.SectionStyle}>
            <Image source = {mail} style={styles.img} />
            <TextInput
              style={{flex:1}}
              placeholder="Mail ID"
              underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.SectionStyle}>
            <Image source = {pw} style={styles.ImageStyle} />
               <TextInput
              style={{flex:1}}
              placeholder="Password"
              secureTextEntry={password}
              underlineColorAndroid="transparent"/>
              {/* Eye Icon  */}
               <Pressable onPress={showpasswordHandler}>
               <Entypo name={img} size={24} color="black" />
               </Pressable>
            </View>
         </View>
       </View>
       <View style= {styles.btn}>
       <Pressable android_ripple = {{ color :'#000000'}} onPress={()=>navigation.navigate('Phone')} >
           <Text style ={styles.button}>SIGN UP</Text>
       </Pressable>
       </View>
    
       </>  
};

export default SignUp

const styles = StyleSheet.create({
  text : {
    fontSize : 30,
    fontWeight : 'bold',
    marginLeft : 125,
    marginTop : '10%'
  },
  main : {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems : 'center'
},
  subtitle : {
    marginTop : '5%',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    marginTop : '50%'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 45,
    borderRadius: 20 ,
    margin: 10
},
ImageStyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
img : {
    padding: 10,
    margin: 10,
    height: 20,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
touch : {
    padding : 15,
    textAlign : 'center',
    // width : '50%'
},
btn : {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems : 'center',
    marginTop: '35%'  
},
button : {
   backgroundColor : '#BF40BF',
   padding : 15,
   width : 200,
   textAlign : 'center',
   borderRadius : 25 ,
   fontWeight : 'bold',
   color : 'white'
}

})