import React from 'react'
import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Screen from '../screens/screen';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Stacknavigator from './stack-navigator';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Tabs from './tab';
import CalculatorScreen from '../screens/calculator-screen';


const Drawer = createDrawerNavigator();

const LateralDrawer = () => {
  const { width } = useWindowDimensions();

  console.log(width);

  return (
    <Drawer.Navigator
      drawerContent={InternalMenu}
      screenOptions={{
        drawerType: width >= 724 ? 'permanent' : 'front',
        // drawerStyle: width >= 724 ? null : { width: '100%' },
        overlayColor: 'transparent',
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation:'slide'
      }}
    >
      <Drawer.Screen name="Tabs" options={{ title: 'Tabs' }} component={Tabs} />
      <Drawer.Screen name="Home" options={{ title: 'Home' }} component={Screen2} />
      <Drawer.Screen name="StackNavigator" options={{ title: 'StackNavigator' }} component={Stacknavigator} />
      <Drawer.Screen name="Calculator" options={{ title: 'Calculator' }} component={CalculatorScreen} />
    </Drawer.Navigator>
  );
};

export default LateralDrawer;

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      <ProfileImageContainer>
        <ProfileImage
          source={{
            uri: 'http://www.e2tech.cl/wp-content/uploads/2019/05/profile-user-2.jpg'
          }}
        />
      </ProfileImageContainer>
      <MenuContainer>
        <MenuOption onPress={() => navigation.navigate('Home')}>
          <MenuOptionText>Home</MenuOptionText>
        </MenuOption>
        <MenuOption onPress={() => navigation.navigate('Tabs')}>
          <MenuOptionText>Tabs</MenuOptionText>
        </MenuOption>
        <MenuOption onPress={() => navigation.navigate('Calculator')}>
          <MenuOptionText>Calculator</MenuOptionText>
        </MenuOption>
        <MenuOption onPress={() => navigation.navigate('StackNavigator')}>
          <MenuOptionText>StackNavigator</MenuOptionText>
        </MenuOption>
      </MenuContainer>
    </DrawerContentScrollView>
  );
};

const ProfileImage = styled.Image`
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 100px;
`;

const ProfileImageContainer = styled.View`
  flex: 1;
`;

const MenuContainer = styled.View`
`;

const MenuOption = styled.TouchableOpacity`
  margin: 15px 10px;
`;

const MenuOptionText = styled.Text`
  font-size: 20px;
`;
