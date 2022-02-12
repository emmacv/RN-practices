import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const PositionScreen = () => {
  return (
    <StyledView>
      <Purple />
      <Orange />
      <Green />
      <Red />
    </StyledView>
  );
};

export default PositionScreen;

const StyledView = styled.View`
  flex: 1; 
  background: #0b5363;
  justify-content: center;
  align-items: center;
`;

const Purple = styled.View`
  width: 100px;
  height: 100px;
  background: #c914c69d;
  border: 10px solid white;
  /* top: 50px; */
  position: absolute;
  /* bottom: 0px; */
  /* right: 50px; */
  /* left: 50px; */
  /* z-index: 3; */
  bottom: 0px;
  right: 0;
  `;

const Green = styled.View`
  width: 100px;
  height: 100px;
  background: #159215b7;
  border: 10px solid white;
  /* top: 50px; */
  position: absolute;
  /* bottom: 0px; */
  /* right: 50px; */
  /* left: 50px; */
  /* z-index: 3; */
  bottom: 0px;
  left: 0;
`;

const Red = styled.View`
  width: 100px;
  height: 100px;
  background: #9b0e0ee5;
  border: 10px solid white;
  /* top: 50px; */
  position: absolute;
  /* bottom: 0px; */
  /* right: 50px; */
  /* left: 50px; */
  /* z-index: 3; */
  top: 0px;
  left: 0;
`;

const Orange = styled.View`
  width: 100px;
  height: 100px;
  background: #e4941bcc;
  border: 10px solid white;
  /* bottom: 100px; */
  position: absolute;
  /* bottom: 0%; */
  right: 0px;
  top: 0px;
  /* left: 50px; */
`;
