
import {View,Text, Pressable, StyleSheet,} from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>xefag</Text>

      <View style={styles.actions}>
        <Pressable
          style={styles.iconButton}
          onPress={() => console.log('Profile pressed')}
        >
          <Text style={styles.profileIcon}>♙</Text>
        </Pressable>

        <Pressable
          style={styles.iconButton}
          onPress={() => console.log('Cart pressed')}
        >
          <Text style={styles.cartIcon}>🛍️</Text>
          <View style={styles.cartDot} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingHorizontal: 24,
   paddingVertical: 12,
},
  logo: {
    fontSize: 30,
    fontWeight: '900',
    color: PharmacyColors.black,
    letterSpacing: -2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: PharmacyColors.white,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileIcon: {
    fontSize: 25,
    color: PharmacyColors.black,
  },
  cartIcon: {
    fontSize: 19,
  },
  cartDot: {
    position: 'absolute',
    top: 8,
    right: 9,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: PharmacyColors.primary,
    borderWidth: 1,
    borderColor: PharmacyColors.black,
  },
});
