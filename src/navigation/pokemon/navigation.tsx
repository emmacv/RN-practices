import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/pokemon/home/Home';
import Details from '../../screens/pokemon/Details';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const navigation = () => {
  const { setOptions, getState } = useNavigation();

  React.useLayoutEffect(() => {

    setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    console.log(getState().routes);
  }, [])

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName='Home'
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default navigation;