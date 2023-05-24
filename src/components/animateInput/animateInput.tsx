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
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const inputItem = useRef(null);

  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withDelay(
          50,
          withRepeat(withTiming(offset.value, {duration: 200}), 1, true),
        ),
      },
    ],
  }));

  const handlerOnFocus = useCallback(() => setIsFocusInput(true), []);

  const handleOnBlur = useCallback(() => {
    if (!inputValue) {
      setIsFocusInput(!isFocusInput);
    }
  }, [inputValue, isFocusInput]);

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
      <Animated.View style={[style.animatePalceholder, animatedStyle]}>
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
