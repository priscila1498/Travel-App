import React, {useMemo} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {colors, sizes, spacing} from '../../../constants/theme';
import * as Animatable from 'react-native-animatable';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';
import CustomBackground from './CustomBackground';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Icon from '../../shared/Icon';
import Divider from '../../shared/Divider';
import SectionHeader from '../../shared/SectionHeader';
import RatingOverall from '../../shared/Rating/RatingOverall';
import HotelsCarousel from './HotelsCarousel';
import Reviews from '../../Reviews/Reviews';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopPlacesCarousel from '../../Home/TopPlacesCarousel';
import { SEARCH_HOTELS } from '../../../data';
const AnimatedDivider = Animated.createAnimatedComponent(Divider);

const TripDetailsCard = ({trip}) => {
  const navigation = useNavigation();
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ['30%', '80%'], []);

  const titleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.primary],
    ),
    marginBottom: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 10],
      Extrapolation.CLAMP,
    ),
  }));

  const locationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.lightGray],
    ),
    fontSize: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [sizes.title, sizes.body],
      Extrapolation.CLAMP,
    ),
  }));

  const locationIonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [0, 1],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <BottomSheet
      index={0}
      animatedIndex={animatedIndex}
      snapPoints={snapPoints}
      backgroundComponent={CustomBackground}
      handleComponent={CustomHandler}>
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        easing="ease-in-out"
        duration={400}>
        <Animated.Text style={[styles.title, titleStyle]}>
          {trip.title}
        </Animated.Text>
        <View style={styles.location}>
          <Animated.Text style={[styles.locationText, locationStyle]}>
            {trip.location}
          </Animated.Text>
          <Animated.View style={locationIonStyle}>
            <Icon icon="Location" size={20} style={styles.locationIcon} />
          </Animated.View>
        </View>
      </Animatable.View>
      <AnimatedDivider style={contentStyle} />
      <BottomSheetScrollView
        style={styles.scrollBox}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Animated.View style={contentStyle}>
          <RatingOverall rating={trip.rating} containerStyle={styles.rating} />
          <SectionHeader
            title="Acerca del Hotel"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
          />
          <View style={styles.summary}>
            <Text style={styles.summaryText}>{trip.description}</Text>
          </View>
          <SectionHeader
            title="Habitaciones"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
           
          />
          <TouchableOpacity style={styles.styleB2}>
          <Button 
          color='gray'
          
        title="Ver más hoteles"
        onPress={() => navigation.navigate('HotelsScreen')}
        />
        </TouchableOpacity>
        
        <TopPlacesCarousel list={SEARCH_HOTELS} />
          <TouchableOpacity  style={styles.styleB}>
          <Button 
          color='gray'
          
        title="Realizar Reserva"
        onPress={() => navigation.navigate('Reserva')}
        />
          </TouchableOpacity>
          <SectionHeader
            title="Reviews"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
            onPress={() => {}}
            buttonTitle="See All"
            
          />
          <Reviews reviews={trip.reviews} />
        </Animated.View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationText: {
    fontSize: sizes.title,
    color: colors.white,
  },
  locationIcon: {
    tintColor: colors.gray,
  },
  scrollBox: {
    marginTop: spacing.s,
    marginBottom: spacing.m,
  },
  sectionHeader: {
    marginTop:20,
  },
  sectionTitle: {
    color: colors.lightGray,
    fontWeight: 'normal',
  },
  styleB: {
    color: 'gray',
    marginTop:-50,
    fontWeight: 5,
    padding:50,
    marginEnd:200,
    fontSize: 2

  },
  styleB2: {
    color: 'gray',
    marginTop:-50,
    fontWeight: 80,
    padding:40,
    marginEnd:200,
    fontSize: 45

  },
  summary: {
    marginHorizontal: spacing.l,
  },
  summaryText: {
    color: colors.primary,
  },
  rating: {
    marginHorizontal: spacing.l,
  },
});

export default TripDetailsCard;
