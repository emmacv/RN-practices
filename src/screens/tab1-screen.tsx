import { View, Text } from 'react-native'
import React from 'react'

const Tab1Screen = () => {
  React.useEffect(() => {
    console.log('tab1');
  }, []);

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  )
}

export default Tab1Screen;
