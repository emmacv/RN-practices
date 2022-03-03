import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native'
import Stacknavigator from './src/navigation/stack-navigator';
import CalculatorScreen from './src/screens/calculator-screen';
import DimensionsScreens from './src/screens/dimensions-screens';
import FlexScreen from './src/screens/flex-screen';
import LateralDrawer from './src/navigation/lateral-drawer';
import Tabs from './src/navigation/tab';
// import BoxObjectModelScreen from './src/screens/box-object-model';
// import Counter from './src/screens/view'
// import PositionScreen from './src/screens/position-screen';

const App = () => {
  // return <Counter />;
  // return <DimensionsScreens />;
  // return <FlexScreen />;
  // return <CalculatorScreen />
    return (
    <NavigationContainer>
      {/* <Stacknavigator /> */}
      {/* <StackDrawer /> */}
      <LateralDrawer />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
