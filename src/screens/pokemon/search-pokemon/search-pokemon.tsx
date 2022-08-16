import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const SearchPokemon = () => {
  return (
    <Container>
      <InputContainer><TextInput autoCorrect={false}/></InputContainer>
    </Container>
  )
}

export default SearchPokemon;

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  
  elevation: 8,
};

const Container = styled.View`
  flex: 1;
`;

const InputContainer = styled.View`
  padding: 12px 8px;
`;

const TextInput = styled.TextInput`
  border-radius: 16px;
  border: 2px solid #000;
  padding: 12px 25px;
`;
