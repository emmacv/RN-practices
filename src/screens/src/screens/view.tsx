import React from 'react';
import styled from 'styled-components/native';

const View = () => {
  const [counter, setCount] = React.useState(0);

  return (
    <StyledView style={{
      flex: 1,
      backgroundColor: 'red',
    }}>
      <StyledText>
        Contador: { counter }
      </StyledText>
    </StyledView>
  );
};

export default View;

const StyledView = styled.View`
  
`;

const StyledText = styled.Text`

`;
