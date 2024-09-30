import {View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Recents, Contacts} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: COLORS.white,
          height: Platform.OS === 'ios' ? 110 : 70,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5,
          color: COLORS.gray,
        },
        tabBarShowLabel: true, // Show labels
      }}>
      <Tab.Screen
        name="Recents"
        component={Recents}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? icons.phoneCall : icons.phoneCallOutline}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
          tabBarLabel: 'Recents',
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? icons.user : icons.userOutline}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
          tabBarLabel: 'Contacts', // Label below icon
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
