import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  button: {
    elevation: 3,
    top: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 44,
    backgroundColor: COLOR.simpleOrange,
    borderRadius: 3,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
