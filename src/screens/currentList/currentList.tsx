/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {openDatabase} from 'react-native-sqlite-storage';

import {AnimateInput, ListRow} from '@components';

import style from './currentList.style.ts';

const db = openDatabase({
  name: 'shop_mate_db',
});

const CurrentList: React.FC = () => {
  const list = useSelector((state: IRootState) => state.listReducer);
  const [listHeaderTitle, setListHeaderTitle] = useState<Array>([]);
  const [listItemInput, setListItemInput] = useState<string>('');
  const [listArray, setListArray] = useState<Array>([]);
  const [listsFromDB, setListsFromDB] = useState<Array>([]);

  const setObjectFromString = (string: string, array: Array) => {
    let id = array.length;
    setListArray([...listArray, {id, name: string}]);
    setListItemInput(null);
  };

  const setItemsInDB: React.FC = item => {
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO list (name, list_id) VALUES("${item}", "${listHeaderTitle.id}")`,
        [],
        (sqlTxn, res) => {
          console.log('list added successfully');
        },
        error => {
          console.log('error on added list ' + error.message);
        },
      );
    });
    getLists();
  };

  const getLists: React.FC = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM list WHERE list_id = ${listHeaderTitle.id}`,
        [],
        (sqlTxn, res) => {
          console.log('lists retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                name: item.name,
                list_id: item.list_id,
              });
            }

            setListArray(results);
          }
        },
        error => {
          console.log('error on getting lists ' + error.message);
        },
      );
    });
  };

  const onDeleteListItemFromStore: React.FC = item => {
    db.transaction(txn => {
      txn.executeSql(`DELETE FROM list WHERE id=${item}`, []);
    });
    getLists();
  };

  useEffect(() => {
    list ? setListHeaderTitle(list.list) : null;
    getLists();
  }, [list, listHeaderTitle, listItemInput]);

  return (
    <View style={style.container}>
      <View key={listHeaderTitle.id} style={style.header}>
        <Text style={style.headerText}>{listHeaderTitle.id}</Text>
        <Text style={style.headerText}>{listHeaderTitle.name}</Text>
      </View>

      <View style={style.formContainer}>
        <View style={style.inputContainer}>
          <AnimateInput
            animatedPlaceholderTextValue={'list item'}
            value={listItemInput}
            onChangeText={setListItemInput}
          />
          <TouchableOpacity
            style={style.addButton}
            onPress={() =>
              listItemInput.length ? setItemsInDB(listItemInput) : null
            }>
            <Text style={style.addButtonText}>add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.fakeShadowContainer}>
        <View style={style.fakeShadow} />
      </View>
      <View style={style.listContainer}>
        {listArray.length ? (
          <FlatList
            data={listArray}
            renderItem={({item}) => (
              <ListRow
                name={item.name}
                deletePress={() => onDeleteListItemFromStore(item.id)}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text>No Items</Text>
        )}
      </View>
    </View>
  );
};

export {CurrentList};
