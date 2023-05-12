import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {AnimateInput, ListRow} from '@components';

import style from './currentList.style.ts';

const CurrentList: React.FC = () => {
  const list = useSelector(state => state.listReducer);
  const [listHeaderTitle, setListHeaderTitle] = useState<Array>([]);
  const [listItemInput, setListItemInput] = useState<string>('');
  const [listArray, setListArray] = useState<Array>([]);

  const setObjectFromString = (string: string, array: Array) => {
    let id = array.length;
    setListArray([...listArray, {id, listItem: string}]);
  };

  useEffect(() => {
    console.log(listItemInput);
    console.log(listArray);
    list ? setListHeaderTitle(list.list) : null;
  }, [list, listArray, listHeaderTitle, listItemInput]);

  return (
    <View style={style.container}>
      <View key={listHeaderTitle.id} style={style.header}>
        <Text style={style.headerText}>{listHeaderTitle.id}</Text>
        <Text style={style.headerText}>{listHeaderTitle.name}</Text>
      </View>

      <View style={style.formContainer}>
        <AnimateInput
          animatedPlaceholderTextValue={'list item'}
          value={listItemInput}
          onChangeText={setListItemInput}
        />
        <TouchableOpacity
          style={style.addButton}
          onPress={() =>
            listItemInput.length
              ? setObjectFromString(listItemInput, listArray)
              : null
          }>
          <Text>add</Text>
        </TouchableOpacity>
      </View>
      <View style={style.fakeShadowContainer}>
        <View style={style.fakeShadow} />
      </View>
      <View style={style.listContainer}>
        {listArray ? (
          <FlatList
            data={listArray}
            renderItem={({item}) => <ListRow name={item.listItem} />}
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
