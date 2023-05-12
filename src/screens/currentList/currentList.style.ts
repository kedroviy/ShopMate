import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.white,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: COLOR.darkSlateGray,
  },
  scroll: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addButton: {
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 40,
    backgroundColor: COLOR.platinum,
    borderRadius: 5,
    marginLeft: 10,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
