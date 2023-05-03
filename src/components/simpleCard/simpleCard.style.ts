import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    backgroundColor: COLOR.peachYellow,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  card: {
    width: '100%',
    height: '100%',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
