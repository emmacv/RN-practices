import React from 'react';
import styled from 'styled-components/native';
import { Animated, Button } from 'react-native';
import useFade from '../hooks/use-fade';
import useAnimation from '../hooks/use-animation';

const Animation101 = () => {
  const { fadeIn, fadeOut, opacity, top } = useAnimation(0, 1, 700);

  return (
    <Container>
      <PurpleElement
        style={{
          opacity,
          transform: [{ translateY: top }],
        }}
      />
      <Button title="press me" onPress={() => fadeIn()} />
    </Container>
  );
};

export default Animation101;

const Container = styled.View`
  flex: 1;
`;

const PurpleElement = styled(Animated.View)`
  background-color: #5856d6;
  height: 150px;
  width: 150px;
  margin: auto;
`;
