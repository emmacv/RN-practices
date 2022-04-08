import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Screen from '../screens/screen';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';

export type RootStackParamas = {
  Screen: undefined;
  Screen2: undefined;
  Screen3: {
    id: number;
    name: string;
  };
};

const Stack = createStackNavigator<RootStackParamas>();

const Stacknavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Screen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: '#ff552282',
        }
      }}
    >
      <Stack.Screen name="Screen" component={Screen} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
};

export default Stacknavigator;
