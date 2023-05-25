/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useCallback} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import {AnimateInput} from '@components';

import style from './createListModal.style.ts';

const db = openDatabase({
  name: 'shop_mate_db',
});

const CreateListModal: React.FC = ({handlePress}) => {
  const [listNameInput, setListNameInput] = useState<string>('');

  const addNewList = useCallback(
    listName => {
      if (!listNameInput) {
        alert('Enter list name');
        return false;
      }

      db.transaction(txn => {
        txn.executeSql(
          'INSERT INTO lists (name) VALUES (?)',
          [listName],
          (sqlTxn, res) => {
            console.log(`${listName} list added successfully`);
          },
          error => {
            console.log('error on adding list ' + error.message);
          },
        );
      });
      handlePress();
    },
    [handlePress, listNameInput],
  );

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.buttonBack} onPress={handlePress}>
        <Image
          style={style.arrowBackIcon}
          source={require('../../../assets/arrow.png')}
        />
      </TouchableOpacity>
      <View style={style.formContainer}>
        <AnimateInput
          animatedPlaceholderTextValue={'Enter text'}
          value={listNameInput}
          onChangeText={setListNameInput}
        />
      </View>
      <View style={style.applyButtonContainer}>
        <TouchableOpacity
          style={style.applyButton}
          onPress={() => {
            addNewList(listNameInput);
          }}>
          <Text style={style.text}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CreateListModal};
