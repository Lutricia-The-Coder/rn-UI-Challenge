
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

type BuyButtonProps = {
  onPress: () => void;
};

export default function BuyButton({ onPress }: BuyButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>BUY NOW</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 15,
    marginBottom: 25,
  },
  button: {
    backgroundColor: PharmacyColors.black,
    paddingVertical: 17,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: PharmacyColors.white,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
