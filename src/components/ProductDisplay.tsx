
import React, { useState, useEffect } from 'react';
import {View,Text,Image,StyleSheet, Pressable,
} from 'react-native';

import PharmacyColors from '@/constants/pharmacy-colors';
import QuantitySelector from '@/components/QuantitySelector';

const relaxImage = require('@/assets/images/Relax.png');
const sleepImage = require('@/assets/images/Sleep.png');

type ProductDisplayProps = {
  productName: string;
  description: string;
  price: number;
  quantity: number;
  onChange: (quantity: number) => void;
  children?: React.ReactNode;
};

export default function ProductDisplay({
  productName,
  description,
  price,
  quantity,
  onChange,
  children,
}: ProductDisplayProps) {
  const isRelax = productName.toLowerCase().includes('relax');
  const [selectedSize, setSelectedSize] = useState(30);

  // Preload both product images
useEffect(() => {
  const relaxSource = Image.resolveAssetSource(relaxImage);
  const sleepSource = Image.resolveAssetSource(sleepImage);

  if (relaxSource?.uri) {
    Image.prefetch(relaxSource.uri);
  }

  if (sleepSource?.uri) {
    Image.prefetch(sleepSource.uri);
  }
}, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={isRelax ? relaxImage : sleepImage}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.sizeOptions}>
        {[30, 60, 90].map((size) => {
          const selected = selectedSize === size;

          return (
            <Pressable
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeCircle,
                selected && styles.selectedCircle,
              ]}
            >
              <Text style={styles.sizeText}>{size}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.details}>
        <Text style={styles.productName}>{productName}</Text>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.priceQuantityRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.currency}>$</Text>
            <Text style={styles.price}>{price.toFixed(2)}</Text>
          </View>

          <QuantitySelector
            quantity={quantity}
            onChange={onChange}
          />
        </View>

        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginTop: 12,
  },

  imageContainer: {
    width: 280,
    height: 400,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productImage: {
    width: 240,
    height: 400,
    maxWidth: undefined,
  },

  relaxImage: {
    transform: [{ translateX: 50 }],
  },

  sleepImage: {
    transform: [{ translateX: -25 }],
  },

  sizeOptions: {
    position: 'absolute',
    right: 12,
    top: 10,
    gap: 12,
    alignItems: 'center',
  },

  sizeCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#a1a1a1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedCircle: {
    backgroundColor: PharmacyColors.black,
  },

  sizeText: {
    fontSize: 15,
    fontWeight: '600',
    color: PharmacyColors.background,
  },

  details: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: PharmacyColors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    borderRadius: 30,
  },

  productName: {
    fontSize: 23,
    fontWeight: '800',
    color: PharmacyColors.black,
    textAlign: 'left',
    lineHeight: 30,
  },

  description: {
    fontSize: 13,
    color: PharmacyColors.secondaryText,
    textAlign: 'left',
    lineHeight: 20,
    marginTop: 8,
    maxWidth: 280,
  },

  priceQuantityRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 18,
  },

  currency: {
    fontSize: 32,
    fontWeight: '900',
    color: PharmacyColors.black,
    marginRight: 4,
  },

  price: {
    fontSize: 32,
    fontWeight: '900',
    color: PharmacyColors.black,
  },
});
