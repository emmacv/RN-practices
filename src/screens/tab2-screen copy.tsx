import { View, Text } from 'react-native'
import React from 'react'

const Tab2Screen = () => {
  React.useEffect(() => {
    console.log('tab2');
  }, []);
  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  )
}

export default Tab2Screen;
