import React from 'react'
import styled from 'styled-components/native';

interface Props {
  text: string;
  background?: string;
  large?: boolean;
  action?: string;
  onPress: React.Dispatch<{
    type: any;
    payload: any;
  }>;
}

const Button: React.FC<Props> = ({ text: key, background ='#2d2d2d', large = false, action = 'number', onPress }) => {
  return (
    <View
      background={background}
      large={large}
      activeOpacity={0.35}
      onPress={() => onPress({ type: action, payload: key })}
    >
      <ButtonText>
        {key}
      </ButtonText>
    </View>
  );
};

export default Button;

const View = styled.TouchableOpacity<{ background: string; large: boolean; }>`
  width: ${({ large }) => (large ? 2 : 1) * 75}px;
  height: 75px;
  background: ${({ background }) => background};
  border-radius: 100px;
  /* margin: 0 6px; */
`;

const ButtonText = styled.Text`
  color: black;
  margin: auto;
  font-size: 25px;
`;
