import React from 'react';
import IncreaseButton from '../components/buttons/increase-button'
import styled from 'styled-components/native';

const View = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <Container>
      <StyledView>
        <StyledText>
          Contador: { counter }
        </StyledText>
        <IncreaseButton onPress={() => setCounter(prev => prev - 1)} position="right" />
        <IncreaseButton onPress={() => setCounter(prev => prev + 1)} position="left" />
      </StyledView>
    </Container>
  );
};

export default View;

const Container = styled.View`
  flex: 1;
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: khaki;
  margin: auto;
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: 40px;
`;
