import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useGradientColor } from '../../context/gradient-context';
import useFade from '../../hooks/use-fade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {
  const value = '1';

  const {
    currentColors,
    previousColors,
    setPreviousColors,
  } = useGradientColor();

  const { opacity, fadeIn, fadeOut } = useFade(0, 1, 300);

  useEffect(() => {
    fadeIn(() => {
      setPreviousColors(currentColors);
      fadeOut();
    });
  }, [currentColors]);

  console.log('prev ----->', previousColors);
  console.log('current ----->', currentColors);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[previousColors.primary, previousColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}
      >
        <LinearGradient
          colors={[currentColors.primary, currentColors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>

      {children}
    </View>
  );
};
