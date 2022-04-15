import React from 'react';
import FlatListMenuItem from './components/FlatListMenuItem';
import { FlatList, Text, View } from 'react-native';

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

const HomeScreen = () => {
  const [state, setState] = React.useState(0);

  console.log('rendered');

  return (
    <View style={{}}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={({ item }) => <FlatListMenuItem item={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <Text>Header</Text>}
      />
    </View>
  );
};

export default HomeScreen;
