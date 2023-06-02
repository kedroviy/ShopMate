import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.white,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: COLOR.mountbattenPink,
  },
  formContainer: {
    width: '105%',
    alignItems: 'center',
    height: 200,
    borderBottomWidth: 1,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    color: COLOR.white,
    fontSize: 20,
    letterSpacing: 2,
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
    backgroundColor: COLOR.tiffanyBlue,
    borderRadius: 5,
    top: 30,
  },
  addButtonText: {
    color: COLOR.white,
    textTransform: 'uppercase',
  },
  text: {
    color: COLOR.white,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
