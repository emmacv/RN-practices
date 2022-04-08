import React from 'react';
import { Dimensions, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

const DimensionsScreens = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Text>Width: {width} Height: {height}</Text>
      <SecondView/>
      <ThirdView/>
    </View>
  );
};

export default DimensionsScreens;

const View = styled.View`
  background: red;
  height: 600px;
`;

const SecondView = styled.View`
  background: blue;
  height: 40%;
`;

const ThirdView = styled.View`
  background: yellow;
  height: 50%;
`;

const Text = styled.Text`

`;
