import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '105%',
    height: 850,
    padding: 0,
    backgroundColor: COLOR.white,
  },
  scroll: {
    width: 393,
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: 15,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
