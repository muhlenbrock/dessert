import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {s} from './ButtonPrimaryStyle';

type ButtonPrimaryProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function ButtonPrimary({
  label,
  onPress,
  disabled,
}: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled ? s.buttonDisabled : s.button}>
      <Text style={s.textButton}>{label}</Text>
    </TouchableOpacity>
  );
}
