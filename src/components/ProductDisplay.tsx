
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
  const isRelax = productName.includes('Relax');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/xefag-products.webp')}
          style={[
            styles.productImage,
            isRelax ? styles.relaxImage : styles.sleepImage,
          ]}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>R {price.toFixed(2)}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    width: 220,
    height: 220,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 440,
    height: 220,
    maxWidth: undefined,
  },
  relaxImage: {
    transform: [{ translateX: 110 }],
  },
  sleepImage: {
    transform: [{ translateX: -110 }],
  },
  details: {
    alignItems: 'center',
    marginTop: 15,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PharmacyColors.black,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: PharmacyColors.secondaryText,
    textAlign: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PharmacyColors.black,
    marginTop: 12,
  },
  quantity: {
    fontSize: 14,
    color: PharmacyColors.secondaryText,
    marginTop: 5,
  },
});
