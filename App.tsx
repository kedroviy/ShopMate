/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';

import {StartScreen} from '@screens';
import {Navigation} from '@navigation';

const db = openDatabase({
  name: 'shop_mate_db',
  location: 'default',
});

function App(): JSX.Element {
  const [isStartScreen, setIsStartScreen] = useState<boolean>(true);
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(35))',
        [],
        (sqlTxn, res) => {
          console.log('table "Lists" created successfully');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS list (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(35), list_id INTEGER)',
        [],
        (sqlTxn, res) => {
          console.log('table "List" created successfully');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStartScreen(false);
    }, 1500);

    createTables();

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <NavigationContainer>
      {isStartScreen ? <StartScreen /> : <Navigation />}
    </NavigationContainer>
  );
}

export default App;
