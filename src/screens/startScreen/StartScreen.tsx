import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './startScreen.style.ts';

const StartScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <Image style={style.tinyLogo} source={require('../../assets/logo.png')} />
      <Text style={style.text}>ShopMate</Text>
    </View>
  );
};

export {StartScreen};
