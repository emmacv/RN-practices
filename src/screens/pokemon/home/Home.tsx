import React from 'react'
import styled from 'styled-components/native';
import PokeballImage from '../../../assets/images/pokebola.png';
import usePokemonApi from '../../../hooks/use-pokemon-api';
import { Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

const renderItem = ({ item }: { item: PokemonSingleType }) => (
  <Item>
    <Text>{item.name}</Text>
  </Item>
);

const Home = () => {
  const { data } = usePokemonApi({
    params: {
      limit: 20,
      page: 1,
    }
  });

  return (
    <Container>
      <StyledImage source={PokeballImage} resizeMode="contain"/>
      <FlashList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={19}
      />
    </Container>
  )
}

export default Home;

const Container = styled.View`
  flex: 1;
`;

const Item = styled.View``;

const StyledImage = styled.Image`
  height: 40%;
  position: absolute;
  top: 0px;
  opacity: 0.2;
`;
