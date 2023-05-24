import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import style from './listRow.style.ts';

const ListRow: React.FC = ({id, name, editPress, deletePress}) => {
  return (
    <View style={style.container} key={id}>
      <TouchableOpacity style={style.buttonDelete} onPress={editPress}>
        <Image
          style={style.deleteIcon}
          source={require('../../assets/edit.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={style.text}>{name}</Text>
      </View>
      <TouchableOpacity style={style.buttonDelete} onPress={deletePress}>
        <Image
          style={style.deleteIcon}
          source={require('../../assets/delete.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export {ListRow};
