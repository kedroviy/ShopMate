import {StyleSheet} from 'react-native';

import {COLOR} from '@config';

export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    width: '80%',
    height: 480,
    backgroundColor: COLOR.white,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  formContainer: {
    bottom: 5,
  },
  buttonBack: {
    flexDirection: 'row',
    left: 145,
    bottom: 150,
    width: 40,
    height: 40,
  },
  closeModalIcon: {
    width: 25,
    height: 25,
  },
  applyButtonContainer: {
    top: 130,
    width: 250,
    height: 50,
    borderColor: COLOR.royalBlue,
    borderWidth: 3,
    borderRadius: 4,
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: COLOR.royalBlue,
    marginLeft: 10,
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
