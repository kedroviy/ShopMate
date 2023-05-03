import React, {useState, useCallback, useEffect} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import {AnimateInput} from '@components';

import style from './createListModal.style.ts';

const db = openDatabase({
  name: 'shop_mate_db',
  location: 'default',
});

const CreateListModal: React.FC = ({handlePress}) => {
  const [listNameInput, setListNameInput] = useState<string>('');

  const submitListName = useCallback(listName => {
    console.log(listName);
  }, []);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
        [],
        (sqlTxn, res) => {
          console.log('table created successfully');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  };

  useEffect(() => {
    createTables();
  }, []);

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
          animatedPlaceholderTextValue={'Enter list name'}
          value={listNameInput}
          onChangeText={setListNameInput}
        />
      </View>
      <View style={style.applyButtonContainer}>
        <TouchableOpacity
          style={style.applyButton}
          onPress={() => submitListName(listNameInput)}>
          <Image
            style={style.arrowBackIcon}
            source={require('../../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CreateListModal};
