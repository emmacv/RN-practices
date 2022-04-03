
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tab1-screen';
import Stacknavigator from './stack-navigator';
import { Text } from 'react-native';
import TopTabNavigator from './top-tab-navigator';
import BasicIcon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        console.log(route.name)
        return ({
          tabBarIcon: ({ color }) => ({
            Tab1Screen: <Text>T1</Text>,
            Tab2Screen: <Text>T2</Text>,
            StackNavigator: <Text>StackNavigator</Text>,
          }[color]),
          tabBarActiveTintColor: 'red',
          tabBarStyle: {
            borderTopColor: '#580951',
            borderTopWidth: 8,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }
      )}}
    >
      <Tab.Screen 
        name="Tab1Screen"
        component={Tab1Screen}
      />
      <Tab.Screen
        options={{
          title: 'Tab2',
          tabBarIcon: Icon,
        }}
        name="Tab2Screen"
        component={TopTabNavigator}
      />
      <Tab.Screen name="StackNavigator" component={Stacknavigator} />
    </Tab.Navigator>
  );
};

export default Tabs;

const Icon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return (
    <Text style={{ color: props.color }}>
      <BasicIcon name="airplane-outline" />
    </Text>
  )
};
