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
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: COLOR.orangeExtra,
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
    marginLeft: 10,
  },
  saveButton: {
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 40,
    backgroundColor: COLOR.mint,
    borderRadius: 5,
    marginRight: 25,
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
