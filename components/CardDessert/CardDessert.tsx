import {Image, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {s} from './CardDessertStyle';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import ButtonPrimary from '../ButtonPrimary';

type CardDessertProps = {
  uri: string;
  idMeal: number;
  title: string;
};

export default function CardDessert({idMeal, uri, title}: CardDessertProps) {
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
      <Text style={s.titleCard}>{title}</Text>
      <Text style={s.priceCard}>${idMeal}</Text>
      <View style={s.fakeButton}>
        <ButtonPrimary
          label="Show"
          onPress={() => {
            navigation.navigate('DessertDetail', {
              idMeal,
            });
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
