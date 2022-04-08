import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/movies/home';
import Details from '../screens/movies/details';
import { Movie } from '../types/movie-types';

export type RootStackParams = {
  Home: undefined;
  Details: { movie: Movie };
};

const Stack = createStackNavigator<RootStackParams>();

const MoviesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#f4f',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MoviesNavigation;
