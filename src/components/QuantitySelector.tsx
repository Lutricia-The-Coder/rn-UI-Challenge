
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import PharmacyColors from '@/constants/pharmacy-colors';

type QuantitySelectorProps = {
  quantity: number;
  onChange: (quantity: number) => void;
};

export default function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={() => onChange(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
      >
       <FontAwesome
  name="minus-square-o"
  size={22}
  color={PharmacyColors.primary}
/>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={() => onChange(quantity + 1)}
      >
        <FontAwesome
          name="plus-square-o"
          size={22}
          color={PharmacyColors.primary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    width: 160,
    height: 54,
    paddingHorizontal: 7,
    backgroundColor: PharmacyColors.lightBackground,
    borderRadius: 27,
    marginVertical: 12,
  },

  button: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: PharmacyColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pressed: {
    opacity: 0.6,
  },

  quantity: {
    fontSize: 18,
    fontWeight: '800',
    color: PharmacyColors.black,
  },
});
