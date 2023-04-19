import {createStackNavigator} from '@react-navigation/stack';

import {StartScreen} from '@screens';

type RootStackParamList = {
  StartScreen: undefined;
};

const Stack = createStackNavigator();

const Navigation: React.FC<RootStackParamList> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start Screen" component={StartScreen} />
    </Stack.Navigator>
  );
};

export {Navigation};
