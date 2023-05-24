import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import style from './chooseListType.style.ts';

const ChooseListType: React.FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Text style={style.text}>start</Text>
      </TouchableOpacity>
    </View>
  );
};

export {ChooseListType};
