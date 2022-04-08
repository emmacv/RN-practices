import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends DrawerScreenProps<any, any> {}

const Screen2 = ({ navigation }: Props) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Text>
            Click
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [])

  return (
    <View>
      <Text>Screen2</Text>
      <Button
        title="to page 1"
        onPress={() => navigation.navigate('Screen')}
      />
      <Button
        title="to page 3"
        onPress={() => navigation.navigate('Screen3', {
          id: 2,
          name: 'Maria',
        })}
      />
    </View>
  )
}

export default Screen2;
