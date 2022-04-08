import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native';

const ActorCard = ({ actor }) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor?.profile_path}`;

  return (
    <Container>
      {actor?.profile_path && (
        <StyledImage
          source={{ uri }}
        />
      )}
      <InfoContainer>
        <Text>{actor.name}</Text>
        <Text>{actor.character}</Text>
      </InfoContainer>
    </Container>
  )
}

export default ActorCard;

const Container = styled.View`
  flex-direction: row;
  overflow: hidden;
  border-radius: 10px;
  height: 60px;
  min-width: 250px;
  border-bottom-width: 0;
  shadow-color: #000;
  /* shadow-offset: {width: 0, height: 2}; */
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 5;
`;

const StyledImage = styled.Image`
  /* flex: 1; */
  width: 50px;
  /* height: 100%; */
`;

const InfoContainer = styled.View`
  /* width: 200px; */
  flex: 1;
  justify-content: space-evenly;
  margin-left: 12px;
  overflow: hidden;
  min-width: 200px;
  flex-wrap: wrap;
`;
