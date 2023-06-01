import {StyleSheet} from 'react-native';
import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLOR.mountbattenPink,
    color: COLOR.mountbattenPink,
    width: 255,
    height: 40,
    paddingLeft: 15,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginVertical: 15,
  },
  animatePalceholder: {
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 20,
    bottom: 11,
    left: 10,
    paddingHorizontal: 20,
    backgroundColor: COLOR.white,
    fontSize: 15,
  },

  animatePalceholder_active: {
    alignItems: 'center',
    width: '100%',
    left: 3,
    color: COLOR.eggplant,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    backgroundColor: COLOR.white,
  },
  touch: {
    backgroundColor: COLOR.white,
    right: 16,
  },
});
