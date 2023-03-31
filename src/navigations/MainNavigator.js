import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HotelsScreen from '../screens/HotelsScreen';
import Ver from '../screens/Ver';
import LoginScreen from '../screens/LoginScreen';
import TripDetailsScreen from '../screens/TripsDetailScreen';

const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName='Login'>
     
        
       <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            
          }}
        />
         
        <Stack.Screen
          name="TripDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;