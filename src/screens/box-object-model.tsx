import React from 'react';
import styled from 'styled-components';

const BoxObjectModelScreen = () => {
  return (
    <View>
      <Text> Box Object Model </Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const View = styled.View`
  background: #224ac2b7;
  height: 100%;
`;

const Text = styled.Text`
  border: 10px dashed yellow;
  padding: 50px;
  margin: auto;
  width: 150px;
`;

