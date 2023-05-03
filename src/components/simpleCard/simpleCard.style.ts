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
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
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
