import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DessertDetailScreen} from '../views/home';
import {OrdersScreen} from '../views/orders';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  Home: undefined;
  DessertDetail: {idMeal: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DessertDetail" component={DessertDetailScreen} />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}

// function RootStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="DessertDetail" component={DessertDetailScreen} />
//     </Stack.Navigator>
//   );
// }

export {RootStack};
