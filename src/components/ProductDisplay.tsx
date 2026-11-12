import {View,Text,Image, StyleSheet,} from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

type ProductDisplayProps = {
  productName: string;
  description: string;
  price: number;
  children?: React.ReactNode;
};

export default function ProductDisplay({
  productName,description, price, children}: ProductDisplayProps) {
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

        <Text style={styles.description}>
          {description}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.price}>
            {price.toFixed(2)}
          </Text>
          {children}
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
 description: {
   fontSize: 13,
   color: PharmacyColors.secondaryText,
   textAlign: 'left',
   lineHeight: 20,
   marginTop: 8,
   maxWidth: 280,
},
  imageContainer: {
    width: 280,
    height: 280,
    overflow: 'hidden',
    alignItems: 'center',
   justifyContent: 'center',
},
productImage: {
  width: 580,
  height: 280,
  maxWidth: undefined,
},
relaxImage: {
  transform: [{ translateX: 145 }],
},
sleepImage: {
  transform: [{ translateX: -145 }],
},
details: {
  width: '100%',
  alignItems: 'flex-start',
  backgroundColor: PharmacyColors.white,
  borderRadius: 30,
  paddingHorizontal: 24,
  paddingVertical: 26,
  marginTop: 12,
},
  productName: {
    fontSize: 23,
    fontWeight: '800',
    color: PharmacyColors.black,
    textAlign: 'left',
    lineHeight: 30,
  },
priceContainer: {
  flexDirection: 'row',
  alignItems: 'baseline',
  marginTop: 18,
  alignSelf: 'flex-start',
},
currency: {
  fontSize: 18,
  fontWeight: '700',
  color: PharmacyColors.black,
  marginRight: 4,
},
price: {
  fontSize: 32,
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
