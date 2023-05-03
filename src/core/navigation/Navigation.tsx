import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StartScreen, HomeScreen} from '@screens';

type RootStackParamList = {
  StartScreen: undefined;
};

const Stack = createStackNavigator();

const Navigation: React.FC<RootStackParamList> = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start Screen" component={StartScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export {Navigation};