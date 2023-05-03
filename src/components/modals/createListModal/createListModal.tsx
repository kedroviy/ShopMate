import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';

import {AnimateInput} from '@components';

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
      <View style={style.formContainer}>
        <AnimateInput animatedPlaceholderTextValue={'Enter list name'} />
      </View>
      <View>
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CreateListModal};
