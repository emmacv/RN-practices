import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

LogBox.install();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <Text>Hola</Text>} />
      <Tab.Screen name="Settings" component={() => <Text>Mundo</Text>} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
