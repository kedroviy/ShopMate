import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: 180,
    height: 90,
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
  closeButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: COLOR.white,
    borderRadius: 50,
  },
  deleteIcon: {
    width: '60%',
    height: '60%',
  },
  text: {
    color: COLOR.white,
    letterSpacing: 1,
  },
  title: {
    fontSize: 20,
  },
});
