import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './priceInput.style.ts';

const PriceInput: React.FC = () => {
  const [integer, setInteger] = useState<string>('0');
  const [fraction, setFraction] = useState<string>('0');

  return (
    <View style={style.container}>
      <Icon style={style.icon} name="attach-money" size={24} color="black" />
      <TextInput
        value={integer}
        keyboardType="numeric"
        style={style.input}
        onChangeText={text => setInteger(text)}
      />
      <View style={style.dot} />
      <TextInput
        value={fraction}
        style={style.input}
        onChangeText={text => setFraction(text)}
      />
    </View>
  );
};

export {PriceInput};
