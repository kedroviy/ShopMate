/* eslint-disable react-hooks/rules-of-hooks */
import React, {useCallback, useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {TextInput, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import style from './animateInput.style';

const AnimateInput: React.FC = ({
  animatedPlaceholderTextValue,
  value,
  onChangeText,
}) => {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [inputValue, setInputValue] = useState();
  const inputItem = useRef(null);

  const offset = useSharedValue(0);

  const animatedStyle = useCallback(
    (numDuration, numDelay) =>
      useAnimatedStyle(() => ({
        transform: [
          {
            translateY: withDelay(
              numDelay,
              withRepeat(
                withTiming(offset.value, {duration: numDuration}),
                1,
                true,
              ),
            ),
          },
        ],
      })),
    [offset.value],
  );

  const handlerOnFocus = useCallback(() => setIsFocusInput(true), []);

  const handleOnBlur = useCallback(() => {
    if (!inputValue) {
      setIsFocusInput(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (isFocusInput) {
      offset.value = -18;
      inputItem.current.focus();
    } else {
      offset.value = 0;
    }
    setInputValue(value);
  }, [isFocusInput, value, inputValue, offset]);

  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={() => handleOnBlur()}
        ref={inputItem}
      />
      <Animated.View style={[style.animatePalceholder, animatedStyle(200, 50)]}>
        <TouchableOpacity
          style={style.touch}
          activeOpacity={1}
          onPress={() => handlerOnFocus()}>
          <Text style={isFocusInput ? style.animatePalceholder_active : null}>
            {animatedPlaceholderTextValue}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

AnimateInput.propTypes = {
  animatedPlaceholderTextValue: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

export {AnimateInput};
