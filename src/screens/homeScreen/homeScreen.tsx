import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import {SimpleCard, CreateListModal} from '@components';

import style from './homeScreen.style.ts';

const db = openDatabase({
  name: 'shop_mate_db',
});

const HomeScreen: React.FC = () => {
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

  useEffect(() => {
    console.log(listsFromDB);
    listsFromDB.length
      ? listsFromDB.map(item => console.log(item))
      : getLists();
  }, [listsFromDB]);

  return (
    <View style={style.container}>
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
              listsFromDB.map(item => <SimpleCard key={item.id} {...item} />)
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
