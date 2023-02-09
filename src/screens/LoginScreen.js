
import { Text, TouchableOpacity, View, StyleSheet, TextInput, ImageBackground,Button, Image } from "react-native"



import { useNavigation } from "@react-navigation/native";



import React ,{useEffect, useState  } from 'react';


export const LoginScreen = () =>{
   
    const navigation = useNavigation();
    const image = {  uri: "http://davidtejo.com/wp-content/uploads/2021/08/D7A7541_ALTA.jpg" };
    const [Email, setEmail] = useState([]);
    const [Contraseña, setContraseña] = useState([]);
     
    const [hotelStatusEntitys,sethotelStatusEntitys] = useState([]);
    


    
    return(
        
    <View  style={styles.container}>
  < ImageBackground source={image} resizeMode="cover" style={{flex:1, justifyContent:"flex-start", width:380, alignItems:"center"}} >
        {/*<Text style={styles.ScreenTitle}>Login</Text>*/}

        


      
        <Text style={styles.ScreenTitle}>Accede a tu cuenta</Text>
        
          
          
         
      



        <TouchableOpacity >

        <View style={styles.sectionStyle}>
           
            
          <TextInput
            placeholder="Email                                                        "
            value={Email}
            setValue={setEmail}
            secureTextEntry={false}
            KeyboardType=""
            />
</View>



             <View style={styles.sectionStyle}>
            <Image
            source={{
              uri:
                'https://cdn.icon-icons.com/icons2/2942/PNG/512/password_icon_183875.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput
          value={Contraseña}
          placeholder="Contraseña   "
          setValue={setContraseña}
          secureTextEntry={true}
          KeyboardType=""
            />
          
</View>




<TouchableOpacity   style={styles.styleB}>
            <Button

              
            color='#da70d6'
        title="Iniciar"
        
        onPress={() => navigation.navigate('Root',{screen:'Habitaciones'})
    }
    
      />

</TouchableOpacity>



                    

            </TouchableOpacity>
             </ImageBackground>
    </View>
   
    );
  
  };




const styles=StyleSheet.create({
    container:{
        flex: 1,
       
        padding:0,
        marginTop: 0,
        alignItems:'center'
    },

ScreenTitle:{
    fontSize: 15,
    marginTop:50,
    fontWeight:'bold',
    padding:10
},
SubTitlle:{
fontSize:30,

},
styleB:{
    color:'#da70d6',
    marginTop:40,
    fontWeight:'contained',
    padding:25,
    borderRadius:40,
  },
TextInput:{
    padding:10,
    paddingStart:40,
    
    height:50,
    marginTop:10,
    borderRadius:40,
    backgroundColor:'grey',
    marginHorizontal:'5'
    
},
forgotPassword:{
fontSize:14,
color:'gray',
marginTop:20,
},
sectionStyle: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    backgroundColor: 'gray',
    borderWidth: 20,
    borderColor: '',
    height: 5,
    borderRadius: 10,
    margin: 20
    
    
  },
  imageStyle: {
    padding:20,
    margin: 5,
    height: 30,
    width: 40,
    resizeMode: 'stretch',
    alignItems: 'baseline',
  },

});
export default LoginScreen;

