import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DessertDetailScreen} from '../views/home';

type RootStackParamList = {
  Home: undefined,
  DessertDetail: {idMeal: string},
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DessertDetail" component={DessertDetailScreen} />
    </Stack.Navigator>
  );
}

export {RootStack};
