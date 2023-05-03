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

const db = openDatabase(
  {
    name: 'ShopMateDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    createTable();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXIST ' +
          'User ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);',
      );
    });
  };
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
            <SimpleCard />
            <SimpleCard />
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
