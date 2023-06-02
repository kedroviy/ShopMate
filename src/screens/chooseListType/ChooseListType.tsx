import React, {useState, useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import {
  ListTypeCard,
  CreateListModal,
  AnimateSwipeIcon,
  PriceListModal,
} from '@components';
import {DATA} from './data.ts';
import style from './chooseListType.style.ts';

const ChooseListType: React.FC = () => {
  const width = Dimensions.get('window').width;
  const [isSimpleList, setIsSimpleList] = useState<boolean>(false);
  const [isPriceList, setIsPriceList] = useState<boolean>(false);
  const [isSwipeIconVisible, setIsSwipeIconVisible] = useState<boolean>(true);

  const openList = id => {
    switch (id) {
      case 1:
        setIsSimpleList(true);
        break;
      case 2:
        setIsPriceList(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSwipeIconVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={style.container}>
      {isSimpleList ? (
        <CreateListModal handlePress={() => setIsSimpleList(false)} />
      ) : null}
      {isPriceList ? (
        <PriceListModal handlePress={() => setIsPriceList(false)} />
      ) : null}
      {!isSimpleList && !isPriceList ? (
        <View style={style.carouselContainer}>
          <Carousel
            loop
            width={width}
            autoPlay={false}
            data={[...DATA]}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({item}) => (
              <ListTypeCard {...item} openFunction={() => openList(item.id)} />
            )}
          />
        </View>
      ) : null}
      <View style={style.swipeIcon}>
        {isSwipeIconVisible ? <AnimateSwipeIcon /> : null}
      </View>
    </View>
  );
};

export {ChooseListType};
