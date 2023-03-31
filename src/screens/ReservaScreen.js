import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, sizes } from '../constants/theme';
import moment from 'moment';


const ReservaScreen = () => {
  const navigation = useNavigation();
  //const [hotelUser_id, setHotelUser_id] = useState('');
  const [description, setDescription] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [amountPeople, setAmountPeople] = useState('');
  //const [hotelRoom_id, setHotelRoom_id] = useState('');
  const [CheckValidArrival, setCheckValidArrival] = useState('');
  const [CheckValidDeparture, setCheckValidDeparture] = useState('');

  const hotelReservationStatu_id = 1;
  const hotelStatusEntity_id = 1;

  const hotelRoom_id=1;



  const handleCheckFecha = text => {
    let re = /S\S\S/;
    let regex =  /[2]{1}?[0]{1}?[2]{1}?[1-9]{1}?[-]?[0,1]{1}?[1-9]{1}?[-]?[0-3]{1}?[0-9]{1}$/;
  
    setArrival(text);
    setDeparture(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidArrival(false);
     
      
    } 
    
    
    else {
      setCheckValidArrival(true);
      
    }
  };
  
  
  const handleCheckDeparture = text => {
    let re = /S\S\S/;
    let regex = /[2]{1}?[0]{1}?[2]{1}?[1-9]{1}?[-]?[0,1]{1}?[1-9]{1}?[-]?[0-3]{1}?[0-9]{2}$/;
  
    
    setDeparture(text);
    if (re.test(text) || regex.test(text)) {
      
      setCheckValidDeparture(true);
      
    } 
  
    else {
      setCheckValidDeparture(false);
    }
  };










  const handleReserva = async () => {
    // Hacer la solicitud a la API REST con los datos del usuario



  
    const token = await AsyncStorage.getItem('token');
    ///const hotelUser_id = await AsyncStorage.getItem('hotelUser_id');
    let data_user = await AsyncStorage.getItem('data_user');
    if (data_user !== null) {
      //console.log(JSON.parse(data_user));
      data_user= JSON.parse(data_user);
      // Aquí puedes utilizar los datos obtenidos
    }
    //console.log(token);
    console.log(data_user.id);
    console.log(token)
    const hotelUser_id = data_user.id;
    const isBefore = moment (arrival).isBefore(departure);
    if (isBefore) {
    fetch(`https://apphotel.iidtec.com/api/v1/reservation`, {


      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },



      body: JSON.stringify({
        hotelUser_id,
        description,
        arrival,
        departure,
        amountPeople,
        hotelRoom_id,
        hotelReservationStatu_id,
        hotelStatusEntity_id: hotelStatusEntity_id,
        token

      })

    })
      .then(response => response.json())
      .then(data => {
        // Si la solicitud es exitosa, mostrar un mensaje de éxito

        //localStorage.setItem  ('token', JSON.stringify(token));

        Alert.alert('¡Reserva Exitosa!');
        
        console.log(token)
        console.log(data)
        console.log(hotelUser_id)




      })
      .catch(error => {
        // Si hay un error en la solicitud, mostrar un mensaje de error

        Alert.alert('Error de Reserva', error.message);

      })
    }
    else {
      alert('La fecha de salida debe ser posterior a la fecha de llegada');
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva</Text>
      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Descripcion"
          //secureTextEntry={true}
          value={description}
          onChangeText={text => setDescription(text)}

        />
      </View>

      {CheckValidArrival ? (
        <Text style={styles.textFailed}>fecha invalida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}

      <View style={styles.wrapperInput}>

        <TextInput
          placeholder="Fecha de Llegada"
          value={arrival}
          onChangeText={text => handleCheckFecha(text)}
        />
      </View>

      {CheckValidDeparture ? (
        <Text style={styles.textFailed}>fecha invalido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Fecha de Salida"
          value={departure}
          onChangeText={text => handleCheckDeparture(text)}
        />

      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Personas"
          value={amountPeople}
          onChangeText={text => setAmountPeople(text)}
          keyboardType='numeric'
        />
      </View>
     

      {description == '' || arrival == '' || departure == '' || amountPeople == '' || CheckValidArrival || CheckValidDeparture == true ? (
        <TouchableOpacity style={styles.buttonDisable} onPress={handleReserva} >
          <Text style={styles.text}>Reservar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonDisable}
          
          
          
          onPress={handleReserva}>
 <Text style={styles.text}>Reservar</Text>
        </TouchableOpacity>

      )}
      <TouchableOpacity style={styles.buttonDisable} onPress={() => navigation.navigate('Home')} >
        <Text style={styles.text}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  link: {
    color: 'blue'
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  
  
  wrapperInput: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'column-reverse',
    paddingStart: 10,



  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 30
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  buttonDisable: {
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
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
  }
})
export default ReservaScreen;