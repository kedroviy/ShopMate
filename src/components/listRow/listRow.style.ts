import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 380,
    height: 60,
    backgroundColor: COLOR.royalBlue,
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 10,
  },
  buttonDelete: {
    elevation: 3,

    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: COLOR.savoyBlue,
    borderRadius: 25,
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
