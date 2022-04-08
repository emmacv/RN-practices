import { View, Text } from 'react-native'
import React from 'react'

const Tab3Screen = () => {
  React.useEffect(() => {
    console.log('tab3');
  }, []);

  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  )
}

export default Tab3Screen;
