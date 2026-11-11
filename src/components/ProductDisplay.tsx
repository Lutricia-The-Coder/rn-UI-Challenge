
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

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
        <Text style={styles.productName}>
          {productName}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.currency}>R</Text>
          <Text style={styles.price}>
            {price.toFixed(2)}
          </Text>
        </View>

        <View style={styles.quantityBadge}>
          <Text style={styles.quantity}>
            Quantity: {quantity}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 12,
  },
  imageContainer: {
    width: 240,
    height: 240,
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
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  productName: {
    fontSize: 21,
    fontWeight: '800',
    color: PharmacyColors.black,
    textAlign: 'center',
    lineHeight: 28,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 14,
  },
  currency: {
    fontSize: 17,
    fontWeight: '600',
    color: PharmacyColors.black,
    marginRight: 4,
  },
  price: {
    fontSize: 27,
    fontWeight: '900',
    color: PharmacyColors.black,
  },
  quantityBadge: {
    backgroundColor: PharmacyColors.white,
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 10,
  },
  quantity: {
    fontSize: 12,
    fontWeight: '600',
    color: PharmacyColors.black,
  },
});
