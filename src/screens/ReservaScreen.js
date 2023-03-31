import React from 'react';
import {View, StyleSheet, ScrollView, Button, ImageBackground} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/Home/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/Home/TripsList';
import { useNavigation } from '@react-navigation/native';

const Reserva = () => {
  const navigation = useNavigation();
  const image = {  uri: "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2020/10/hotel-sin-nombre.jpg?fit=1500%2C1000&ssl=1" };
  return (
    <View style={styles.container}>
      {/*< ImageBackground source={image} resizeMode="cover" style={{flex:1, justifyContent:"flex-start", width:380, alignItems:"center"}} >*/}
      <ImageBackground source={image} resizeMode='cover' style={{flex:1, justifyContent:'flex-start', width:400}}>
      <MainHeader title="HotelesApp" />
      <ScreenHeader mainTitle="Rincon de la Alameda" secondTitle="Caracteristicas" />
     
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title=""
        />
        <View> 
        
        
        </View>
          </ImageBackground>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default Reserva;
