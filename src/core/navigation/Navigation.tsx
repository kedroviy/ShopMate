import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLOR} from '../../config/constants/style-constants.ts';
import {StartScreen, HomeScreen, CurrentList, ChooseListType} from '@screens';

type RootStackParamList = {
  StartScreen: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home Screen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'New List') {
            iconName = focused ? 'add-to-photos' : 'add-to-photos';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: `${COLOR.orange}`,
        tabBarInactiveTintColor: `${COLOR.royalBlue}`,
        headerShown: false,
      })}>
      <Tab.Screen name="Home Screen" component={HomeScreen} />
      <Tab.Screen name="New List" component={ChooseListType} />
    </Tab.Navigator>
  );
}

const Navigation: React.FC<RootStackParamList> = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Start Screen" component={StartScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Current Screen" component={CurrentList} />
        <Stack.Screen name="New List" component={ChooseListType} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export {Navigation};
