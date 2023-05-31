import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.grey,
    flex: 1,
  },
  carouselContainer: {
    top: 60,
    flex: 1,
  },
  swipeIcon: {
    flex: 0.2,
  },
});
