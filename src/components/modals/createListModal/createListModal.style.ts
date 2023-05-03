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
    justifyContent: 'center',
    margin: 5,
    left: 35,
    top: 60,
  },
  formContainer: {
    bottom: 5,
  },
  text: {
    color: COLOR.black,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  buttonBack: {
    right: 130,
    bottom: 150,
    width: 40,
    height: 40,
  },
  arrowBackIcon: {
    width: 25,
    height: 25,
  },
  applyButtonContainer: {
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    top: 120,
    width: 50,
    height: 50,
    backgroundColor: COLOR.moonstone,
    borderRadius: 25,
    borderWidth: 1,
  },
  applyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
