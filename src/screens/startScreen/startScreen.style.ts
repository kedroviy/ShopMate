import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  button: {
    top: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 44,
    backgroundColor: COLOR.simpleOrange,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
