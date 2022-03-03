import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native'
import  { RootStackParamas } from '../navigation/stack-navigator';

type Props = {} & StackScreenProps<RootStackParamas, 'Screen3'>;

const Screen3: React.FC<Props> = ({ navigation, route }) => {
  const { id, name } = route.params || { id: 1, name: '' };

  return (
    <View>
      <Text>Screen3</Text>
      <Button
        title="to page 1"
        onPress={() => navigation.navigate('Screen')}
      />
      <Button
        title="to page 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Text>{name}</Text>
      <Text>{id}</Text>
    </View>
  )
}

export default Screen3;
