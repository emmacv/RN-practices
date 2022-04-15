import React from 'react';
import styled from 'styled-components/native';

const Animation102 = () => {
  return (
    <Container>
      <PurpleElement />
    </Container>
  );
};

export default Animation102;

const Container = styled.View`
  flex: 1;
`;

const PurpleElement = styled.View`
  background-color: #c21a1aec;
  width: 150px;
  height: 150px;
`;
