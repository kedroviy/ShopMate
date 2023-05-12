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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 79,
    width: '100%',
    height: 80,
    padding: 10,
  },
  mainContainer: {
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '64%',
    padding: 0,
  },
  modalForm: {
    left: 30,
  },
  scroll: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLOR.darkSlateGray,
  },
  button: {
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: COLOR.savoyBlue,
    borderRadius: 5,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
