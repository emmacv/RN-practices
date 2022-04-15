import React from 'react';
import { Animated, Easing } from 'react-native';

/**
 * custom hook used to handle the transition between two values: star and end at a given timing.
 * @param start: recieves the starting point.
 * @param end: recieves the finish point.
 */

const useAnimation = (start: number, end: number, duration: number) => {
  const opacity = React.useRef(new Animated.Value(start)).current;
  const top = React.useRef(new Animated.Value(-100)).current;

  const fadeIn = (callback?: Function) => {
    Animated.parallel(
      [
        Animated.timing(opacity, {
          toValue: end,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(top, {
          toValue: 0,
          duration,
          useNativeDriver: true,
          easing: Easing.bounce,
        }),
      ],
      { stopTogether: true }
    ).start(() => callback && callback());

    // Animated.timing(opacity, {
    //   toValue: end,
    //   duration,
    //   useNativeDriver: true,
    // }).start(() => callback && callback());

    // Animated.timing(top, {
    //   toValue: 0,
    //   duration,
    //   useNativeDriver: true,
    // }).start();
  };

  const fadeOut = (duration: number = 300, callback?: Function) => {
    Animated.timing(opacity, {
      toValue: start,
      duration,
      useNativeDriver: true,
    }).start(() => callback && callback());
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
    top,
  };
};

export default useAnimation;
