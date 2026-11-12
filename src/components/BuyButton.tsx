
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PharmacyColors from '@/constants/pharmacy-colors';

type BuyButtonProps = {
  onPress: () => void;
};

export default function BuyButton({ onPress }: BuyButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
       <View style={styles.buttonContent}>
  <Ionicons
    name="bag-handle-outline"
    size={20}
    color={PharmacyColors.black}
  />
  <Text style={styles.buttonText}>BUY NOW</Text>
</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 4,
  },

  button: {
    width: '100%',
    backgroundColor: PharmacyColors.primary,
    paddingVertical: 19,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: PharmacyColors.black,
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});
