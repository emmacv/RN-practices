import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from '../screens/screen';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Animation102 from '../screens/Animation102';
import Animation101 from '../screens/Animation101';
import Components from '../screens/components/FlatListMenuItem';

export type RootStackParamas = {
  Animation102Screen: undefined;
  Animation101Screen: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamas>();





const Stacknavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Animation101Screen" component={Animation101} />
      <Stack.Screen name="Animation102Screen" component={Animation102} />
      <Stack.Screen name="HomeScreen" component={Components} />
    </Stack.Navigator>
  );
};

export default Stacknavigator;
