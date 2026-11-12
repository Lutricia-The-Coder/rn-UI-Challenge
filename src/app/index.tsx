
import React, { useState } from 'react';
import {View,Text,ScrollView,StyleSheet,Alert,SafeAreaView} from 'react-native';
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
    name:
      category === 'RELAX'
        ? 'Relax 30 Dissolvable Wafers'
        : 'Sleep 30 Dissolvable Wafers',
    description:
         '250 mg',
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

>
  <View style={styles.purchaseSection}>
    <QuantitySelector
      quantity={quantity}
      onChange={setQuantity}
    />

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
    paddingBottom:20,
  },
  intro: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: PharmacyColors.black,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: PharmacyColors.black,
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 7,
  },
  purchaseSection: {
    marginTop: 4,
    paddingHorizontal: 24,
    gap: 2,
  },
});
