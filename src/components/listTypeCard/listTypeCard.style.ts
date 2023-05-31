import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,

    width: 350,
    height: '75%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.white,
    borderRadius: 4,
    marginLeft: 30,
    paddingVertical: 50,
  },
  button: {
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 40,
    backgroundColor: COLOR.royalBlue,
    borderRadius: 6,
  },
  headerText: {
    fontSize: 24,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
