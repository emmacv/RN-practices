import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';

const FlexScreen = () => {
  return (
    <Container>
      <Box1>Flex 1</Box1>
      <Box2>Flex 2</Box2>
      <Box3>Flex 3</Box3>
    </Container>
  );
};

export default FlexScreen;

const Box = styled.Text`  
  border: 2px whitesmoke;
  font-size: 30px;
  /* width: 180px; */
  /* height: 100px; */
  padding: 16px;
  /* margin: auto; */
`;

const Container = styled.View`
  flex: 8;
  background: #1414b6d2;
  /* flex-direction: row-reverse; */
  /* flex-direction: row-reverse; */
  justify-content: center;
  /* align-items: center; */
  /* flex-wrap: wrap; */
  /* align-items: flex-end;
  justify-content: flex-end; */
`;

const Box1 = styled(Box)`
  /* flex: 12; */
  /* width: 100px; */
`;

const Box2 = styled(Box)`
  /* flex: 2;  */
`;

const Box3 = styled(Box)`
  /* flex: 2; */
`;
