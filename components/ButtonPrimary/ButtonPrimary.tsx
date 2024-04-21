import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {s} from './ButtonPrimaryStyle';

type ButtonPrimaryProps = {
  label: string;
  onPress: () => void;
};

export default function ButtonPrimary({label, onPress}: ButtonPrimaryProps) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.textButton}>{label}</Text>
    </TouchableOpacity>
  );
}
