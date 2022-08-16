import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Pokeball from '../../../src/assets/images/pokebola-blanca.png';
import usePokemon from '@hooks/use-pokemon';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


type PokemonItem = {
  [K in keyof PokemonSingleType]: PokemonSingleType[K];
}

type Props = StackScreenProps<ReactNavigation.RootParamList['Details']>;

const { height } = Dimensions.get('window');

const sizes = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
};

const renderPokemonAbility = (item: Pokemon['abilities'][number]) => <Text style={{ marginHorizontal: sizes.xs }}>{item.ability.name}</Text>;

const renderPokemonMoves = (item: Pokemon['moves'][number]) => <Text style={{ marginHorizontal: sizes.xs }}>{item.move.name}</Text>;

const Details = ({ route: { params } }: Props) => {
  const [dimensions, setDimensions] = React.useState({});
  const { item } = params;

  const { data, isLoading } = usePokemon(params.item.name);

  const onLayout = ({ nativeEvent: { layout } }) => setDimensions({ ...layout });

  return (
    <Container>
      <Header onLayout={onLayout}>
        <ColorContainer style={{ backgroundColor: params.item.color }}>
          <Text>{params.item.name}</Text>
          <Text>#{params.item.number + 1}</Text>
          <PokeballImage source={Pokeball} resizeMode="stretch"  />
        </ColorContainer>
        <PokemonImage source={{ uri: params.item.pictureUrl }} resizeMode="contain" />
      </Header>
      <PokemonDetails style={{ top: height - dimensions.height || 0 }}>
      {isLoading || !Object.keys(data) ? 
      (
        <ActivityIndicator 
          color={params.item.color}
        />
      ) : (
          <PokemonDetailsScroll showsVerticalScrollIndicator={false}>
            <Text size="xl">Abilities</Text>
            <ItemContainer>
              {(data as Pokemon)?.abilities?.map(renderPokemonAbility)}
            </ItemContainer>
            <ItemContainer>
              {(data as Pokemon)?.moves?.map(renderPokemonMoves)}
            </ItemContainer>
          </PokemonDetailsScroll>
        )}
      </PokemonDetails>
    </Container>
  );
}

export default Details;

const Container = styled.View`
  flex: 1;
`;

const ColorContainer = styled.View`
  height: 100%;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  overflow: hidden;
  width: 100%;
  padding: 0 20px;
`;

const Header = styled.View`
  height: 50%;
  z-index: 1;
`;

const PokeballImage = styled.Image`
  top: -50px;
  left: -20px;
  opacity: 0.5;
`;

const PokemonImage = styled.Image`
  height: 50%;
  width: 50%;
  top: -40%;
  align-self: center;
`;

const Text = styled.Text<{ size?: keyof typeof sizes }>`
  font-size: 30px;
  z-index: 2;
  font-size: ${({ size }) => sizes[size] || sizes.m}px;
`;

const PokemonDetails = styled.ScrollView`
  ${StyleSheet.absoluteFill}
`;

const PokemonDetailsScroll = styled.ScrollView`
`;

const ItemContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
