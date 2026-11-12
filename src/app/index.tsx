
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import ProductDisplay from '@/components/ProductDisplay';
import BuyButton from '@/components/BuyButton';
import PharmacyColors from '@/constants/pharmacy-colors';

export default function HomeScreen() {
  const [category, setCategory] = useState('Relax');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name:
      category === 'Relax'
        ? 'Relax 30 Dissolvable Wafers'
        : 'Sleep 30 Dissolvable Wafers',
    description: '250 mg',
    price: 25.50,
  };

  const handleBuy = () => {
    Alert.alert(
      'Added to cart',
      `${quantity} item(s) added to your cart.`,
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />

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
          onChange={setQuantity}
        >
          <View style={styles.purchaseSection}>
            <BuyButton onPress={handleBuy} />
          </View>
        </ProductDisplay>

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
    flexGrow: 1,
    paddingBottom: 0,
  },

  purchaseSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
});
