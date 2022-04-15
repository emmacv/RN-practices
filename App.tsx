import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import Stacknavigator from './src/navigation/stack-navigator-02';
import CalculatorScreen from './src/screens/calculator-screen';
import DimensionsScreens from './src/screens/dimensions-screens';
import FlexScreen from './src/screens/flex-screen';
import LateralDrawer from './src/navigation/lateral-drawer';
import Tabs from './src/navigation/tab';
import AuthProvider from './src/context/auth-context';
import MoviesNavigation from './src/navigation/movies-navigation';
import FadeIn from './src/screens/fade-in';
import GradientProvider from './src/context/gradient-context';
import FlatListMenuItem from './src/screens/components/FlatListMenuItem';
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
      {/* <AppProviders> */}
      {/* <Stacknavigator /> */}
      {/* <StackDrawer /> */}
      {/* <LateralDrawer /> */}
      {/* <Tabs /> */}
      {/* </AppProviders> */}
      {/* <GradientProvider>
        <MoviesNavigation />
      </GradientProvider> */}
      {/* <FadeIn /> */}
      {/* <FlatListMenuItem /> */}
      <Stacknavigator />
    </NavigationContainer>
  );
};

const AppProviders = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default App;
