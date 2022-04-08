import React from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/buttons/calculator/button';
import useFade from '../hooks/use-fade';

const FadeIn = () => {
  const { fadeIn, fadeOut, opacity } = useFade(0, 1, 300);

  const [toggle, setToggle] = React.useState(true);

  return (
    <Container>
      <SubContainer style={{ opacity }}/>
      <Button text="press me!" onPress={() => {
        setToggle(!toggle);
        (toggle ? fadeIn : fadeOut)();
      }}/>
    </Container>
  )
}

export default FadeIn;

const Container = styled.View`
  flex: 1;
  background-color: #f52;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled(Animated.View)`
  background-color: #084f6a;
  width: 150px;
  height: 150px;
  border: white 10px;
`;
