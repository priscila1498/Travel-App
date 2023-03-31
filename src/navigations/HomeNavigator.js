import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Tabs from '../components/shared/Tabs';

import Editar2 from '../screens/Edit2';
import EditReserva from '../screens/EditReserva';
import HomeScreen from '../screens/HomeScreen';
import HotelsScreen from '../screens/HotelsScreen';
import LoginScreen from '../screens/LoginScreen';
import Splash from '../screens/Logout';
import Register from '../screens/RegistroScreen';
import ReservaScreen from '../screens/ReservaScreen';
import TripDetailsScreen from '../screens/TripsDetailScreen';
import TablaDatos from '../screens/Ver';

import Ver from '../screens/Ver';
import TabNavigator from './TabNavigator';

const Stack = createSharedElementStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    
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
        name="HotelsScreen"
        component={HotelsScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
          name="Ver"
          component={TablaDatos}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
          }}
        />
      <Stack.Screen
        name="Edit2"
        component={Editar2}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,

        }}
      />
       <Stack.Screen
        name="Edit"
        component={EditReserva}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,

        }}
      />
      <Stack.Screen
        name="Reserva"
        component={ReservaScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Registro"
        component={Register}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />

      <Stack.Screen
        name="Logout"
        component={Splash}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />


    </Stack.Navigator>


  );
};

export default HomeNavigator;
