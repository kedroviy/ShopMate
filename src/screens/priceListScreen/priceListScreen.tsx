/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {AnimateInput, ListRow, PriceInput} from '@components';

import style from './priceListScreen.style.ts';

const db = openDatabase({
  name: 'shop_mate_db',
});

const PriceListScreen: React.FC = () => {
  const list = useSelector((state: IRootState) => state.listReducer);
  const navigation: NavigationFunc = useNavigation();
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
        `INSERT INTO price_list (name, list_id) VALUES("${item}", "${listHeaderTitle.id}")`,
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
        `SELECT * FROM price_list WHERE list_id = ${listHeaderTitle.id}`,
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

            setListsFromDB(results);
          }
        },
        error => {
          console.log('error on getting lists ' + error.message);
        },
      );
    });
  };

  const onDeleteListItemFromStore = item => {
    setListsFromDB(listsFromDB.filter(itemDB => itemDB.id !== item));
    db.transaction(txn => {
      txn.executeSql(`DELETE FROM price_list WHERE id=${item}`, []);
    });
    console.log(listsFromDB);
  };

  const setInList = item => {
    setItemsInDB(item);
    setListItemInput('');
  };

  useEffect(() => {
    if (list) {
      setListHeaderTitle(list.list);
    }
    getLists();
  }, [list, listHeaderTitle, listItemInput]);

  return (
    <View style={style.container}>
      <View key={listHeaderTitle.id} style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={style.headerText}>{listHeaderTitle.name}</Text>
      </View>
      <View style={style.formContainer}>
        <View style={style.inputContainer}>
          <AnimateInput
            animatedPlaceholderTextValue={'Enter text'}
            value={listItemInput}
            onChangeText={setListItemInput}
          />
          <View>
            <PriceInput />
          </View>
        </View>
        <TouchableOpacity
          style={style.addButton}
          onPress={() =>
            listItemInput.length ? setInList(listItemInput) : null
          }>
          <Text style={style.addButtonText}>add</Text>
        </TouchableOpacity>
      </View>
      <View style={style.fakeShadowContainer}>
        <View style={style.fakeShadow} />
      </View>
      <View style={style.listContainer}>
        {listsFromDB.length ? (
          <FlatList
            data={listsFromDB}
            renderItem={({item}) => (
              <ListRow
                name={item.name}
                deletePress={() => {
                  onDeleteListItemFromStore(item.id);
                  getLists();
                }}
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

export {PriceListScreen};