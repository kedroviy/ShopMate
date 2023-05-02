import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: COLOR.extraLightBlue,
    borderRadius: 3,
    alignItems: 'center',
    margin: 5,
  },
  card: {
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 44,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
