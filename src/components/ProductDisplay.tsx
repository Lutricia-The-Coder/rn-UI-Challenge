
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

type ProductDisplayProps = {
  productName: string;
  description: string;
  price: number;
  quantity: number;
};

export default function ProductDisplay({
  productName,
  description,
  price,
  quantity,
}: ProductDisplayProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Product Image</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.productName}>{productName}</Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <Text style={styles.price}>
          R {price.toFixed(2)}
        </Text>

        <Text style={styles.quantity}>
          Quantity: {quantity}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PharmacyColors.white,
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 18,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: 220,
    borderRadius: 18,
    backgroundColor: PharmacyColors.lightBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: PharmacyColors.secondaryText,
    fontSize: 16,
  },
  details: {
    width: '100%',
    marginTop: 20,
  },
  productName: {
    fontSize: 23,
    fontWeight: '800',
    color: PharmacyColors.text,
  },
  description: {
    fontSize: 14,
    color: PharmacyColors.secondaryText,
    marginTop: 8,
    lineHeight: 21,
  },
  price: {
    fontSize: 25,
    fontWeight: '800',
    color: PharmacyColors.black,
    marginTop: 15,
  },
  quantity: {
    fontSize: 14,
    color: PharmacyColors.secondaryText,
    marginTop: 8,
  },
});
