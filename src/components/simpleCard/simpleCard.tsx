import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLOR} from '@config';
import style from './simpleCard.style.ts';

const SimpleCard: React.FC = ({name, handlePress, deletePress, typeList}) => {
  const changeStyle = param => {
    if (param === '0') {
      return {backgroundColor: COLOR.tiffanyBlue};
    } else if (param === '1') {
      return {backgroundColor: COLOR.mountbattenPink};
    } else {
      return {backgroundColor: COLOR.darkSlateGray};
    }
  };

  return (
    <View style={[style.container, changeStyle(typeList)]}>
      <View style={style.controls}>
        <TouchableOpacity style={style.button} onPress={handlePress}>
          <Text style={style.text}>Show</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.closeButton} onPress={deletePress}>
          <Icon name="close" size={15} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={[style.text, style.title]}>{name}</Text>
    </View>
  );
};

export {SimpleCard};
