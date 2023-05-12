import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    backgroundColor: COLOR.sandyBrown,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  },
  controls: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 40,
    height: 40,
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
