import React from 'react';
import {View, StyleSheet, ScrollView, Button,Text} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/Home/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/Home/TripsList';
import { useNavigation } from '@react-navigation/native';
//import Drawers from '../navigations/DrawerNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Icon from '../components/shared/Icon';


const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
     
      <MainHeader title="Hoteles App" />
      
      <ScreenHeader mainTitle="Hoteles 5 estrellas" secondTitle="Excelentes Opciones" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Mejores alojamientos"
        />
        <TouchableOpacity style={styles.styleB}>
        <Button
        color='gray'
        title="Ver más"
        onPress={() => navigation.navigate('HotelsScreen')}
        />
        
        </TouchableOpacity>
      
        <View style={ {paddingLeft:30, paddingHorizontal:20}}>
      <Icon icon="Reserva" onPress={() => navigation.navigate ('Edit')}  />
      <Text>Editar Reserva</Text>

    </View>
 
        <TripsList list={PLACES} />
        
      </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  styleB: {
  
    marginTop:-50,
    fontWeight: 5,
    padding:50,
    marginEnd:175,
    fontSize: 2,
  },
  styleB1: {
  
    marginTop:-50,
    fontWeight: 5,
    padding:20,
    marginEnd:175,
    fontSize: 2,

  }
});

export default HomeScreen;
