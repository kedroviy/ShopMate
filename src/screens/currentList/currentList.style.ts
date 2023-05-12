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
  formContainer: {
    width: '105%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 0.8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: COLOR.orange,
  },
  headerText: {
    color: COLOR.white,
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
    marginLeft: 10,
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
  fakeShadowContainer: {
    width: '105%',
    overflow: 'hidden',
    paddingBottom: 5,
  },
  fakeShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,

    backgroundColor: '#fff',
    width: '105%',
    height: 20,
  },
});
