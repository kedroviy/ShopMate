import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';

import {addListInSore, isLoad} from '../../core/redux/actions/appActions';
import {SimpleCard} from '@components';

import style from './homeScreen.style.ts';

const db = openDatabase({
  name: 'shop_mate_db',
});

const HomeScreen: React.FC = () => {
  const dispatch: DispatchFunc = useDispatch();
  const isLoadList = useSelector(state => state.listReducer);
  const navigation: NavigationFunc = useNavigation();
  const [listsFromDB, setListsFromDB] = useState<Array>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getLists = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM lists ORDER BY id DESC',
        [],
        (sqlTxn, res) => {
          console.log('home sc: ', 'lists retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({...item});
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
      if (item.list_type === '0') {
        navigation.navigate('Current Screen');
      } else if (item.list_type === '1') {
        navigation.navigate('Price List Screen');
      } else {
        navigation.navigate('Current Screen');
      }
    },
    [dispatch, navigation],
  );

  const onDeleteListItemFromStore = item => {
    setListsFromDB(listsFromDB.filter(itemDB => itemDB.id !== item.id));
    db.transaction(txn => {
      txn.executeSql(`DELETE FROM lists WHERE id=${item.id}`, []);
      txn.executeSql(`DELETE FROM simple_list WHERE list_id=${item.id}`, []);
    });
    getLists();
  };

  const onRefresh = useCallback(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!listsFromDB.length) {
      setIsLoading(true);
      getLists();

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }

    if (isLoadList.isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    if (isLoading) {
      getLists();
      console.log(listsFromDB);
      dispatch(isLoad(false));
      setIsLoading(false);
    }
  }, [dispatch, isLoadList.isLoading, isLoading, listsFromDB]);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.loginName}>
          <Text style={style.text}>Number of lists: {listsFromDB.length}</Text>
        </View>
      </View>
      <SafeAreaView style={style.mainContainer}>
        <View style={style.contentContainer}>
          {isLoading ? (
            <>
              <ActivityIndicator size="large" color="#3B61D3" />
            </>
          ) : (
            <ScrollView
              contentContainerStyle={style.scroll}
              refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
              }>
              {listsFromDB.length ? (
                listsFromDB.map(item => (
                  <SimpleCard
                    key={item.id}
                    {...item}
                    typeList={item.list_type}
                    handlePress={() => setListItemInStore({...item})}
                    deletePress={() => onDeleteListItemFromStore({...item})}
                  />
                ))
              ) : (
                <Text>No Lists Yet</Text>
              )}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export {HomeScreen};
