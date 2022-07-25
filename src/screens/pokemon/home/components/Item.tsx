import React from 'react';
import styled from 'styled-components/native';
import PokeballImage from '../../../../assets/images/pokebola-blanca.png';

interface Props {
  uri: string;
  item: PokemonSingleType;
}

const initialColor = 'grey';

const Item = ({ uri, item }: Props) => {
  const [backgroundColor, setBackgroundColor] = React.useState(initialColor);

  React.useEffect(() => {
    (async () => {
      const d = 
    })();
  }, []);

  return (
    <Container activeOpacity={0.8}>
      <Text>{item.name}</Text>
      <Text>#{item.number}</Text>
      <ItemImage source={{ uri }} resizeMode="contain" />
      <PokeballContainer>
        <PokeballImg source={PokeballImage}/>
      </PokeballContainer>
    </Container>
  );
};
export default Item;

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, 
}

const ItemImage = styled.Image`
  height: 100%;
  top: -16px;
  right: 0;
  right: -40%;
`;

const Container = styled.TouchableOpacity`
  height: 100px;
  width: 44%;
  padding: 10px 12px;
  background-color: red;
  margin: 16px 0;
  border-radius: 10px;
  ${shadow}
`;

const PokeballImg = styled.Image`
  flex: 1;
  width: 100%;
  left: 20px;
`;

const PokeballContainer = styled.View`
  position: absolute;
  height: 100px;
  width: 100px;
  z-index: -1;
  right: 0;
  border-radius: 10px;
  opacity: 0.5;
  overflow: hidden;
`;

const Text = styled.Text`
  font-size: 20px;
`;