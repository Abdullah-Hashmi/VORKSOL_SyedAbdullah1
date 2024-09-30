import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Intro,
  Recents,
  Calling,
  DetailedContact,
  FigmaToCode,
  Contacts,
} from '../screens';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="FigmaToCode" component={FigmaToCode} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Recents" component={Recents} />
        <Stack.Screen name="Calling" component={Calling} />
        <Stack.Screen name="DetailedContact" component={DetailedContact} />
        <Stack.Screen name="Main" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
