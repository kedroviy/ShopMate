import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import style from './listRow.style.ts';

const ListRow: React.FC = ({id, name, handlePress}) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>{id}</Text>
        <Text style={style.text}>{name}</Text>
      </View>
      <TouchableOpacity style={style.buttonDelete} onPress={handlePress}>
        <Image
          style={style.deleteIcon}
          source={require('../../assets/delete.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export {ListRow};
