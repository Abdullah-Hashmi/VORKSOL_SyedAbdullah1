import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigations from './navigations/AppNavigations';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigations />
    </SafeAreaProvider>
  );
}
