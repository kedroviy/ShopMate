import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import style from './startScreen.style.ts';

const StartScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Text style={style.text}>start</Text>
      </TouchableOpacity>
    </View>
  );
};

export {StartScreen};
