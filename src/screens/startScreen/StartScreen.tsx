import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './startScreen.style.ts';

const StartScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Home Screen')}>
        <Text style={style.text}>start</Text>
      </TouchableOpacity>
    </View>
  );
};

export {StartScreen};
