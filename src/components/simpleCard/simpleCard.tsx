import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import style from './simpleCard.style.ts';

const SimpleCard: React.FC = ({name, handlePress, deletePress}) => {
  return (
    <View style={style.container}>
      <View style={style.controls}>
        <TouchableOpacity style={style.button} onPress={handlePress}>
          <Text>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={deletePress}>
          <Image
            style={style.deleteIcon}
            source={require('../../assets/close-button.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={style.text}>{name}</Text>
    </View>
  );
};

export {SimpleCard};
