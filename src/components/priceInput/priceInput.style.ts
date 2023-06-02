import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 80,
    height: 50,
  },
  input: {
    width: 80,
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: COLOR.mountbattenPink,
    marginHorizontal: 10,
  },
  dot: {
    top: 39,
    width: 2,
    height: 2,
    backgroundColor: COLOR.black,
  },
  icon: {
    top: 15,
  },
});
