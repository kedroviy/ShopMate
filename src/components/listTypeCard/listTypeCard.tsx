import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity} from 'react-native';

import style from './listTypeCard.style.ts';

const ListTypeCard: React.FC = ({title, description}) => {
  return (
    <View style={style.container}>
      <Text style={style.headerText}>{title}</Text>
      <View>
        <Text>image</Text>
      </View>
      <Text>{description}</Text>
      <TouchableOpacity style={style.button}>
        <Text style={style.text}>Open</Text>
      </TouchableOpacity>
    </View>
  );
};

ListTypeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export {ListTypeCard};
