import React from 'react';
import styled from 'styled-components/native';

interface Props {
  uri: string;
}

const Item = ({ uri }: Props) => (
  <Container>
    <ItemImage source={{ uri}}/>
  </Container>
);

export default Item;

const ItemImage = styled.Image`
  flex: 1;
`;

const Container = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
`;