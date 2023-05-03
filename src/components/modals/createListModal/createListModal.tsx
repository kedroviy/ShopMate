import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import style from './createListModal.style.ts';

const CreateListModal: React.FC = ({handlePress}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.buttonBack} onPress={handlePress}>
        <Image
          style={style.arrowBackIcon}
          source={require('../../../assets/arrow.png')}
        />
      </TouchableOpacity>
      <View>
        <Text>Enter list name</Text>
      </View>
    </View>
  );
};

export {CreateListModal};
