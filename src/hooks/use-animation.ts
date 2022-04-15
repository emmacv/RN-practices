import React from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = ({
  initialOpacityValue,
  initialPosition,
  finalHeightValue,
  finalOpacityValue,
  opacityDuration,
  heightDuration,
  startInRender,
}) => {
  const opacity = React.useRef(new Animated.Value(initialOpacityValue)).current;
  const verticalPosition = React.useRef(new Animated.Value(initialPosition)).current;

  
  const fadeIn = (callback?: Function) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: finalOpacityValue,
        duration: opacityDuration,
        useNativeDriver: true,
      }),
      Animated.timing(verticalPosition, {
        toValue: finalHeightValue,
        duration: heightDuration,
        useNativeDriver: true,
        easing: Easing.bounce
      })
    ], {
      stopTogether: true
    }).start(() => callback && callback());
  };

  const fadeOut = (callback?: Function) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: initialOpacityValue,
        duration: opacityDuration,
        useNativeDriver: true,
      }),
      Animated.timing(verticalPosition, {
        toValue: initialPosition,
        duration: heightDuration,
        useNativeDriver: true,
        easing: Easing.bounce
      })
    ], {
      stopTogether: true
    }).start(() => callback && callback());
  }

  React.useEffect(() => {
    if (startInRender) {
      fadeIn();
    }
  }, []);

  return {
    opacity,
    verticalPosition,
    fadeIn,
    fadeOut,
  };
}

export default useAnimation;