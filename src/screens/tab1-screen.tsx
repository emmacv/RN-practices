import React from 'react';

import styled from 'styled-components/native';
import IconTouchable from './components/icon-touchable';

const Tab1Screen = () => {
  React.useEffect(() => {
    console.log('tab1');
  }, []);

  return (
    <View>
      <IconTouchable name="airplane-outline" />
      <IconTouchable name="add-outline" />
      <IconTouchable name="aperture-outline" />
      <IconTouchable name="arrow-redo-outline" />
      <IconTouchable name="at-circle-outline" />
      <IconTouchable name="arrow-up-circle-outline" />
      <IconTouchable name="card-outline" />
      <IconTouchable name="cloud-offline-outline" />
      <IconTouchable name="contrast-outline" />
    </View>
  )
}

export default Tab1Screen;

const View = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
