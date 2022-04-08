import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

type Props = { args?: any } & StackScreenProps<any, any>;

const Screen: React.FC<Props> = (props) => {
  console.log(props);
  const navigation = useNavigation();  

  React.useEffect(() => {
    navigation.setOptions({
      title: 'Hola, mundo'
    });
  }, []);

  return (
    <View>
      <Text>Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Screen2')}
      >
        <Text>
          go to page 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen3', {
          id: 1,
          name: 'Luis'
        })}
      >
        <Text>
          go to page 3
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen;

const View = styled.View`
  flex: 1;
`
