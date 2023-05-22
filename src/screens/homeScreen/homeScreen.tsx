import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';

import {addListInSore} from '../../core/redux/actions/appActions';
import {SimpleCard, CreateListModal} from '@components';

import style from './homeScreen.style.ts';

const db = openDatabase({
  name: 'shop_mate_db',
});

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [listsFromDB, setListsFromDB] = useState([]);

  const getLists = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM lists ORDER BY id DESC',
        [],
        (sqlTxn, res) => {
          console.log('lists retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, name: item.name});
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

  const setListItemInStore = useCallback(
    item => {
      dispatch(addListInSore({...item}));
      navigation.navigate('Current Screen');
    },
    [dispatch, navigation],
  );

  const onDeleteListItemFromStore = item => {
    db.transaction(txn => {
      txn.executeSql(`DELETE FROM lists WHERE id=${item.id}`, []);
    });
    getLists();
  };

  useEffect(() => {
    console.log(listsFromDB);
    listsFromDB.length ? null : getLists();
  }, [listsFromDB]);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.loginName}>
          <Text>login-name</Text>
        </View>
        <View style={style.avatar}>
          <Text>avatar</Text>
        </View>
      </View>
      <SafeAreaView style={style.mainContainer}>
        <Modal
          style={style.modalForm}
          visible={modalVisible}
          animationType="slide">
          <CreateListModal handlePress={() => setModalVisible(!modalVisible)} />
        </Modal>
        <>
          <ScrollView contentContainerStyle={style.scroll}>
            {listsFromDB.length ? (
              listsFromDB.map(item => (
                <SimpleCard
                  key={item.id}
                  {...item}
                  handlePress={() => setListItemInStore({...item})}
                  deletePress={() => onDeleteListItemFromStore({...item})}
                />
              ))
            ) : (
              <Text>No Lists Yet</Text>
            )}
          </ScrollView>
          <TouchableOpacity
            style={style.button}
            onPress={() => setModalVisible(true)}>
            <Text style={style.text}>add new list</Text>
          </TouchableOpacity>
        </>
      </SafeAreaView>
    </View>
  );
};

export {HomeScreen};
