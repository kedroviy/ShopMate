import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './listRow.style.ts';

const ListRow: React.FC = ({id, name, editPress, deletePress}) => {
  return (
    <View style={style.container} key={id}>
      <TouchableOpacity style={style.buttonDelete} onPress={editPress}>
        <Icon name="edit" size={27} color="white" />
      </TouchableOpacity>
      <View>
        <Text style={style.text}>{name}</Text>
      </View>
      <TouchableOpacity style={style.buttonDelete} onPress={deletePress}>
        <Icon name="delete-outline" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export {ListRow};
