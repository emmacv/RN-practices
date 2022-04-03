import { ActivityIndicator, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { useAuth } from '../context/auth-context';
import Icon from 'react-native-vector-icons/Ionicons';

const PositionScreen = () => {
  const { authState, signIn } = useAuth()
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <StyledView>
      <Text>
        {JSON.stringify(authState)}
      </Text>
      {authState.favoriteIcon && <Icon name={authState.favoriteIcon!} size={50} color="red" />}
      <SignInButton onPress={() => signIn()}>
        <Text>
          {authState.isLoggedIn ? 'log out' : 'log in'}
        </Text>
      </SignInButton>
    </StyledView>
  );
};

export default PositionScreen;

const StyledView = styled.View`
  flex: 1; 
  background: #0b5363;
  justify-content: flex-start;
  /* align-items: flex-start; */
`;

const SignInButton = styled.TouchableOpacity`
  background: red;
  width: 150px;
`;

const Purple = styled.View`
  width: 100px;
  height: 100px;
  background: #c914c69d;
  border: 10px solid white;
  top: 0;
  /* top: 50px; */
  /* position: absolute; */
  /* bottom: 0px; */
  /* right: 50px; */
  /* left: 50px; */
  /* z-index: 3; */
  /* bottom: 0px; */
  /* right: 0; */
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
  /* position: absolute; */
  /* bottom: 0px; */
  /* right: 50px; */
  /* left: 50px; */
  /* z-index: 3; */
  top: 0;
  bottom: 0;
  left: 0;
`;

const Orange = styled.View`
  width: 100px;
  flex: 1;
  background: #e4941bcc;
  border: 10px solid white;
  /* bottom: 100px; */
  /* position: absolute; */
  /* bottom: 0%; */
  top: 0;
  right: 0px;
  bottom: 0px;
  /* left: 50px; */
`;
