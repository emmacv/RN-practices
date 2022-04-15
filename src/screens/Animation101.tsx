import React from 'react';
import { Animated, Easing, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import useAnimation from '../hooks/use-animation';

const Animation101 = () => {
  const { height } = useWindowDimensions();
  const { opacity, verticalPosition } = useAnimation({
    initialPosition: -height,
    initialOpacityValue: 0,
    finalHeightValue: 0,
    finalOpacityValue: 1,
    heightDuration: 800,
    opacityDuration: 2000,
    startInRender: true,
  });

  return (
    <Container>
      <PurpleElement 
        style={{
          opacity,
          transform: [{
            translateX: verticalPosition,
          }]
        }}
        ref={element => console.log(element)}
      />
    </Container>
  );
};

export default Animation101;

const Container = styled.View`
  flex: 1;
`;

const PurpleElement = styled(Animated.View)`
  background-color: #5856d6;
  width: 150px;
  height: 150px;
  margin: auto;
`;
