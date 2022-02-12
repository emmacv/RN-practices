import React from 'react';
import { TouchableNativeFeedback, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';


export const Component = ({ onPress, position }) => {
  const { width, height } = useWindowDimensions();

  return(
    <View position={position}>
      <StyledButton onPress={onPress} background={TouchableNativeFeedback.Ripple('black', false, 10)}>
        <ButtonText>
          {`${position === 'left' ? '+' : '-'}1`}
        </ButtonText>
      </StyledButton>
    </View>
  )
}

export default Component;

const ButtonText = styled.Text`
  font-size: 25px;
  align-self: center;
`;

const StyledButton = styled.TouchableNativeFeedback`
`;

const View = styled.View<{ position: boolean }>`
  flex: 1;
  position: absolute;
  justify-content: center;
  border-radius: 100px;
  background: red;
  height: 55px;
  width: 55px;
  bottom: 20px;
  ${({ position }) => `
    ${position}: 16px;
  `}
`;
