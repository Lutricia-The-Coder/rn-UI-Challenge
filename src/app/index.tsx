
import React, { useState } from 'react';
import { View, StyleSheet, Alert, SafeAreaView,} from 'react-native';
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
      <View style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: PharmacyColors.background,
  },
  container: {
    flex: 1,
    minHeight: 0,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    backgroundColor: PharmacyColors.background,
  },
  purchaseSection: {
    width: '100%',
    alignItems: 'center',
  },
});
