

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Eye, EyeActive } from '../assets/index';
import { colors, sizes } from '../constants/theme';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  
  

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);

    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[a-z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }




    return null;
  };

  const handleLogin = async () => {


    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      // Hacer la solicitud a la API REST con los datos del usuario
      await fetch('https://apphotel.iidtec.com/api/v1/login', {
        method: 'POST',
        headers: {
          email,
          password,


          //'Content-Type': 'application/json'
        },
        //body:{

        //}
      })
        .then(response => response.json())

        .then(data => {

          if (data.success) {


            //const token = data.message;
            // Si la solicitud es exitosa, mostrar un mensaje de éxito

            AsyncStorage.setItem('token', data.message);
            //se convierte el json a una cadena de texto
            const jsonData = JSON.stringify(data.data);
            AsyncStorage.setItem('data_user', jsonData);

            Alert.alert('¡Inicio de sesión exitoso!');
            //  Alert.alert('recuerdalo, te servira para tu reserva',data.id);
            navigation.navigate('Home');

            //console.log(data)
            //console.log(data.data)


          }
          else {
            Alert.alert('error de email o contraseña');
          }
        })
        .catch(error => {
          // Si hay un error en la solicitud, mostrar un mensaje de error

          Alert.alert('Error en el inicio de sesión', error.message);
          navigation.navigate('Login');

        });
    }
  };
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>

      <View style={styles.wrapperInput}>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>email invalido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}

      <View style={styles.wrapperInput}>

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.input}
          title=""
          onPress={() => setSeePassword(!seePassword)}>
          <Image source={seePassword ? EyeActive : Eye} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {checkValidEmail || password == true ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable} onPress={handleLogin} >
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonDisable} onPress={handleLogin}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>

      )}
      <View>
        <Text>¿Aún no tienes cuenta?</Text>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Registro')} ><Text>Regístrate</Text>

        </TouchableOpacity>
      </View>

      {/* </ImageBackground>*/}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 30
  },
  wrapperInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'black',
    borderColor: colors.gray

  },
  input: {
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 5,
    padding: 5,
    marginStart: -1,
  },
  icon: {
    width: 30,
    height: 24,
    paddingStart: -50,
    position: 'relative',
    left: -50


  },
  button: {
    padding: 15,
    paddingStart: 100,
    alignContent: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginHorizontal: 50,
    alignItems: 'baseline'
  },

  buttonDisable: {
    padding: 15,
    paddingStart: 100,
    alignContent: 'flex-end',
    height: 50,
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginHorizontal: 50,
  },
  buttonVisible: {
    padding: 15,
    paddingStart: 100,
    alignContent: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginHorizontal: 50,
  },
  text: {
    color: 'white',
    fontWeight: '700',

  },

  text2: {
    color: 'white',
    fontWeight: '700',

  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  link: {
    color: colors.blue,
  },
})
export default LoginScreen;