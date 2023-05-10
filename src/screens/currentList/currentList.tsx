import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import style from './currentList.style.ts';

const CurrentList: React.FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Text style={style.text}>current list</Text>
      </TouchableOpacity>
    </View>
  );
};

export {CurrentList};
