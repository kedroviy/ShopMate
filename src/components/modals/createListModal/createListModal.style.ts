import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: '80%',
    height: 480,
    backgroundColor: COLOR.timberWolf,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: COLOR.black,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  buttonBack: {
    width: 40,
    height: 40,
  },
  arrowBackIcon: {
    width: '90%',
    height: '90%',
  },
});
