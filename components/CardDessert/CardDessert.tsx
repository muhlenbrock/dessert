import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from './CardDessertStyle';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';

type CardDessertProps = {
  uri: string;
  idMeal: number;
};

export default function CardDessert({idMeal, uri}: CardDessertProps) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DessertDetail', {
          idMeal,
        })
      }
      style={s.card}>
      <Image
        style={s.logo}
        source={{
          uri,
        }}
      />
    </TouchableOpacity>
  );
}
