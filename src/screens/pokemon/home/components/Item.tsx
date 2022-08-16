import React from 'react';
import styled from 'styled-components/native';
import PokeballImage from '../../../../assets/images/pokebola-blanca.png';
import ImageColor from 'react-native-image-colors';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';
interface Props {
  uri: string;
  item: PokemonSingleType;
}

const initialColor = 'grey';

const Item = ({ uri, item }: Props) => {
  const { navigate } = useNavigation();
  const [backgroundColor, setBackgroundColor] = React.useState(initialColor);

  React.useEffect(() => {
    let update = true;

    (async () => {
      const d = await ImageColor.getColors(uri, {
        fallback: 'grey',
      });
      update = true;

      if (update) {
        setBackgroundColor(d.platform === 'android' ? d.dominant : d.background);
      }
    })();

    return () => {
      update = false;
    }
  }, []);

  const onSelect = () => navigate('Details', { item: { ...item, color: backgroundColor } });

  return (
    <ColorContainer activeOpacity={0.8} style={{ backgroundColor }} onPress={onSelect}>
      <Text>{item.name}</Text>
      <Text>#{item.number + 1}</Text>
      <ItemImage source={{ uri }} resizeMode="contain" />
      <PokeballContainer>
        <PokeballImg source={PokeballImage}/>
      </PokeballContainer>
    </ColorContainer>
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

const ColorContainer = styled.TouchableOpacity`
  height: 100px;
  width: 44%;
  padding: 10px 12px;
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
