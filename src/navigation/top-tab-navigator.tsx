import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

LogBox.install();

const TopTabNavigator = () => {
  const value = useSafeAreaInsets();
  console.log(value);

  return (
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: '#b64141',
        }}
        screenOptions={{
          tabBarPressColor: 'black',
          tabBarShowIcon: false,
          tabBarIndicatorStyle: {
            backgroundColor: '#2f2'
          },
          tabBarStyle: {
            elevation: 0,
            shadowColor: 'transparent',
            borderTopColor: 'blue',
          }
        }}
      >
        <Tab.Screen name="Home" component={() => <Text>Hola</Text>} />
        <Tab.Screen name="Settings" component={() => <Text>Mundo</Text>} />
      </Tab.Navigator>
  );
};

export default TopTabNavigator;
