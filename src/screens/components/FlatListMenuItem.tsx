import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '../../context/theme-provider';

type Screens = 'Animation101Screen' | 'Animation102Screen';

const MENU_ITEMS = [
  {
    name: 'Animation-101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation-102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

type MenuItem = typeof MENU_ITEMS[number];

type Props = {
  item: MenuItem;
};

const FlatListMenuItem = ({ item: { icon, name, component } }: Props) => {
  const { navigate } = useNavigation();

  return (
    <Container
      activeOpacity={0.5}
      onPress={() => navigate(component as Screens)}
    >
      <StyledIcon name={icon} color="red" size={25} />
      <Text>{name}</Text>
      <ArrowIcon name="chevron-forward-outline" color="red" size={25} />
    </Container>
  );
};

const Components = () => {
  const [, setTheme] = useTheme();

  const onToggleTheme = (theme: 'light' | 'dark') => () => {
    setTheme({ type: theme });
  };

  return (
    <View style={{}}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={({ item }) => <FlatListMenuItem item={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <Text>Header</Text>}
        ListFooterComponent={
          <Footer>
            <StyledButton black onPress={onToggleTheme('dark')}>
                <Text>
                  Dark
                </Text>
              </StyledButton>
            <StyledButton onPress={onToggleTheme('light')}>
              <Text>
                Light
              </Text>
            </StyledButton>
          </Footer>
        }
      />
    </View>
  );
};

export default Components;

const Footer = styled.View`
  background-color: blueviolet;
`;

const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<{ black?: boolean }>`
  background-color: ${({ black }) => (black ? '#0f0f1d' : '#e7dada')};
`;

const Container = styled.TouchableOpacity`
  /* justify-content: flex-start; */
  flex-direction: row;
`;

const StyledIcon = styled(Icon)`
  margin-right: 10px;
`;

const ArrowIcon = styled(Icon)`
  margin-left: auto;
  margin-right: 20px;
`;
