import React from 'react'
import styled from 'styled-components/native';
import PokeballImage from '../../../assets/images/pokebola.png';
import usePokemonApi from '../../../hooks/use-pokemon-api';
import { Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { FlatList } from 'react-native-gesture-handler';
import Item from './components/Item';

const renderItem = ({ item }: { item: PokemonSingleType }) => (
  <Item uri={item.pictureUrl}/>
);

const LIMIT = 40;

const Home = () => {
  const [limit, setLimit] = React.useState(LIMIT);
  const [offset, setOffset] = React.useState(0);

  const { data, loadItems } = usePokemonApi({
    params: {
      limit,
      page: 1,
      offset: 0,
    }
  });

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
