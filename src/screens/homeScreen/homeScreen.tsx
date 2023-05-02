import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';

import {SimpleCard} from '@components';

import style from './homeScreen.style.ts';

const HomeScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={style.scroll}>
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export {HomeScreen};
