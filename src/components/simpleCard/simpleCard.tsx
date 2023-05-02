import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import style from './simpleCard.style.ts';

const SimpleCard: React.FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.card}>
        <Text style={style.text}>SimpleCard</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SimpleCard};
