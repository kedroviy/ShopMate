import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated';

import style from './animateSwipeIcon.ts';

const AnimateSwipeIcon: React.FC = () => {
  const rotation = useSharedValue(0);
  const [isAnimate, setIsAnimate] = useState<boolean>(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  useEffect(() => {
    if (isAnimate) {
      rotation.value = withRepeat(withTiming(10), 6, true);
    } else {
      cancelAnimation(rotation);
    }
    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [isAnimate, rotation]);

  return (
    <View style={style.container}>
      <Animated.View style={animatedStyle}>
        <Icon name="swipe" size={44} color="grey" />
      </Animated.View>
      <Text>Swipe</Text>
    </View>
  );
};

export {AnimateSwipeIcon};
