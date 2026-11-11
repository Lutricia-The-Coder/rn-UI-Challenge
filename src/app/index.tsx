
import React, { useState } from 'react';
import {View,Text, ScrollView,StyleSheet,Alert,SafeAreaView,} from 'react-native';

import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import ProductDisplay from '@/components/ProductDisplay';
import QuantitySelector from '@/components/QuantitySelector';
import BuyButton from '@/components/BuyButton';

import PharmacyColors from '@/constants/pharmacy-colors';

export default function HomeScreen() {
  const [category, setCategory] = useState('RELAX');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: category === 'RELAX'
      ? 'Xefag Relax 30 Dissolvable Wafers'
      : 'Xefag Sleep 30 Dissolvable Wafers',
    description: 'Convenient dissolvable wafers for your daily wellness routine.',
    price: 199.99,
  };

  const handleBuy = () => {
    Alert.alert(
      'Added to cart',
      `${quantity} item(s) added to your cart.`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />

        <Text style={styles.heading}>Find your balance</Text>

        <CategoryTabs
          selectedCategory={category}
          onSelectCategory={(value) => {
            setCategory(value);
            setQuantity(1);
          }}
        />

        <ProductDisplay
          productName={product.name}
          description={product.description}
          price={product.price}
          quantity={quantity}
        />

        <QuantitySelector
          quantity={quantity}
          onChange={setQuantity}
        />

        <BuyButton onPress={handleBuy} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: PharmacyColors.background,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  heading: {
    fontSize: 25,
    fontWeight: '800',
    color: PharmacyColors.black,
    textAlign: 'center',
    marginTop: 15,
  },
});
