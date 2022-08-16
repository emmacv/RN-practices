import React from 'react'
import styled from 'styled-components/native';
import PokeballImage from '../../../assets/images/pokebola.png';
import usePokemonApi from '../../../hooks/use-pokemon-api';
import { Animated, Easing, PanResponder, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { FlatList } from 'react-native-gesture-handler';
import Item from './components/Item';
import { useNavigation } from '@react-navigation/native';

import { tabBarSettings } from '../../../constants/tabBarSettings';

const renderItem = ({ item, index }: { item: PokemonSingleType }) => (
  <Item uri={item.pictureUrl} item={{ ...{ ...item, number: index  } }}/>
);

const LIMIT = 40;

const Home = () => {
  const [limit, setLimit] = React.useState(LIMIT);
  const [offset, setOffset] = React.useState(0);

  const translateY = React.useRef(new Animated.Value(0)).current;

  const translateYInterpolation = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, tabBarSettings.tabBarStyle.height],
  })

  const prev = React.useRef(0);
  const final = React.useRef(0);

  const { setOptions } = useNavigation();

  React.useLayoutEffect(() => {
    setOptions({
      tabBarStyle: {
        ...tabBarSettings.tabBarStyle,
        transform: [{ translateY: translateYInterpolation }],
      }
    });
  }, [])

  const { data, loadItems } = usePokemonApi({
    params: {
      limit,
      page: 1,
      offset: 0,
    }
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: console.log,
  });

  const onScroll = e => {
    const { y: velocityY } = e.nativeEvent.velocity;

    Animated.timing(translateY, {
      toValue: Number(velocityY >= 0),
      duration: 100,
      useNativeDriver: true,
      easing: Easing.bezier(0.25, 0.52,0.36, 0.88),
    }).start();
  }

  return (
    <Container>
      <StyledImage source={PokeballImage} resizeMode="contain"/>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={loadItems}
        onEndReachedThreshold={0.5}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        onScroll={onScroll}
      />
    </Container>
  )
}

export default Home;

const Container = styled.View`
  flex: 1;
`;

const StyledImage = styled.Image`
  height: 40%;
  position: absolute;
  top: 0px;
  opacity: 0.2;
`;
