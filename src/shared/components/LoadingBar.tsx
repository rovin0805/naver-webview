import React from 'react';
import {Animated, View} from 'react-native';
import {colors} from '../styles/colors';

const LoadingBar = ({progress}: {progress: Animated.Value}) => {
  return (
    <View style={{width: '100%', backgroundColor: 'white', height: 5}}>
      <Animated.View
        style={{
          backgroundColor: colors.main,
          height: '100%',
          width: progress.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
        }}
      />
    </View>
  );
};

export default LoadingBar;
