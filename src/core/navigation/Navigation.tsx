import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StartScreen, HomeScreen, CurrentList, ChooseListType} from '@screens';

type RootStackParamList = {
  StartScreen: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
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
