import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from '.';
import SearchPokemon from 'screens/pokemon/search-pokemon/search-pokemon';
import { Animated, Dimensions, Text } from 'react-native';
import { tabBarSettings } from 'constants/tabBarSettings';
import Home from 'screens/pokemon/home/Home';

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get('window');


const PokemonNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: tabBarSettings.tabBarStyle
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="SearchPokemon" component={SearchPokemon} />
  </Tab.Navigator>
);

export default PokemonNavigator;