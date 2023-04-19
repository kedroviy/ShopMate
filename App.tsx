import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StartScreen} from '@screens';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StartScreen />
    </NavigationContainer>
  );
}

export default App;
