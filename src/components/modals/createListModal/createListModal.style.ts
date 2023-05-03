import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    width: '80%',
    height: 480,
    backgroundColor: COLOR.timberWolf,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
    left: 35,
    top: 60,
  },
  formContainer: {
    top: 50,
  },
  text: {
    color: COLOR.black,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  buttonBack: {
    right: 130,
    top: 10,
    width: 40,
    height: 40,
  },
  arrowBackIcon: {
    width: 25,
    height: 25,
  },
});
