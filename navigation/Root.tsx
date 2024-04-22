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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Desserts'}}
      />
      <Stack.Screen
        name="DessertDetail"
        component={DessertDetailScreen}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{title: 'Orders'}}
      />
    </Tab.Navigator>
  );
}

export {RootStack};
