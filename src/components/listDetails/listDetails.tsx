import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import style from './listDetails.style.ts';

const ListDetails: React.FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.card}>
        <Text style={style.text}>details</Text>
      </TouchableOpacity>
    </View>
  );
};

export {ListDetails};
