import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import {ListTypeCard, CreateListModal} from '@components';
import {DATA} from './data.ts';
import style from './chooseListType.style.ts';

const ChooseListType: React.FC = () => {
  const width = Dimensions.get('window').width;
  const [simpleList, setSimpleList] = useState<boolean>(true);

  return (
    <View style={style.container}>
      {simpleList ? <CreateListModal /> : null}
      {!simpleList ? (
        <View style={style.carouselContainer}>
          <Carousel
            loop
            width={width}
            autoPlay={false}
            data={[...DATA]}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({item}) => <ListTypeCard {...item} />}
          />
        </View>
      ) : null}
    </View>
  );
};

export {ChooseListType};
