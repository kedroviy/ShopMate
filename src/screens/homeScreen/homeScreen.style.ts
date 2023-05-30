import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.grey,
  },
  header: {
    backgroundColor: '#457B9D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 75,
    borderRadius: 5,
    width: '95%',
    height: 60,
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
  contentContainer: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    paddingTop: 5,
    flex: 1,
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
  },
  button: {
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 40,
    backgroundColor: COLOR.moonstone,
    borderRadius: 5,
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 500,
  },
});
