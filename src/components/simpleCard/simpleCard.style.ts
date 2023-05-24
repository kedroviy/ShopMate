import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: 180,
    height: 80,
    backgroundColor: COLOR.tiffanyBlue,
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
    marginBottom: 10,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  deleteIcon: {
    width: '60%',
    height: '60%',
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
