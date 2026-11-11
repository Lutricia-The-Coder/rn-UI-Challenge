
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
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
        style={styles.button}
        onPress={() => onChange(Math.max(1, quantity - 1))}
      >
        <Text style={styles.symbol}>−</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable
        style={styles.button}
        onPress={() => onChange(quantity + 1)}
      >
        <Text style={styles.symbol}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 22,
    marginVertical: 15,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: PharmacyColors.lightBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 24,
    fontWeight: '600',
    color: PharmacyColors.black,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '700',
    color: PharmacyColors.text,
  },
});
