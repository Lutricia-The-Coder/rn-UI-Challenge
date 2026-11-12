
import React from 'react';
import {View,Text, Pressable,StyleSheet,} from 'react-native';
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
        <Text
          style={[
            styles.symbol,
            quantity <= 1 && styles.disabledSymbol,
          ]}
        >
          −
        </Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
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
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    width: 160,
    height: 54,
    paddingHorizontal: 8,
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
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },

  symbol: {
    fontSize: 23,
    fontWeight: '700',
    color: PharmacyColors.white,
  },

  disabledSymbol: {
    color: PharmacyColors.muted,
  },

  quantity: {
    fontSize: 18,
    fontWeight: '800',
    color: PharmacyColors.white,
  },
});
