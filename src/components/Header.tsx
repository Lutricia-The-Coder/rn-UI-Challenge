
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable,StyleSheet,} from 'react-native';

import PharmacyColors from '@/constants/pharmacy-colors';

export default function Header() {
  return (
    <View style={styles.container}>

      {/* Back button */}
      <View style={styles.side}>
        <Pressable
          style={styles.backButton}
          onPress={() => console.log('Back pressed')}
        >
          <Ionicons
    name="chevron-back"
    size={28}
    color={PharmacyColors.black}
/>
        </Pressable>
      </View>

      {/* Center logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoSymbol}>◌</Text>
        <Text style={styles.logo}>xefag</Text>
      </View>

      {/* Right actions */}
      <View style={[styles.side, styles.actions]}>

        <Pressable
          style={styles.profileButton}
          onPress={() => console.log('Profile pressed')}
        >
        <Ionicons
         name="person-outline"
         size={21}
         color={PharmacyColors.black}
             />
        </Pressable>

        <Pressable
          style={styles.cartButton}
          onPress={() => console.log('Cart pressed')}
        >
          <Ionicons
          name="bag-handle-outline"
          size={23}
          color={PharmacyColors.black}
           />
          <View style={styles.cartBadge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  side: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  logoSymbol: {
    fontSize: 34,
    fontWeight: '900',
    color: PharmacyColors.black,
  },
  logo: {
    fontSize: 27,
    fontWeight: '900',
    color: PharmacyColors.black,
    letterSpacing: -1.5,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PharmacyColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actions: {
    justifyContent: 'flex-end',
    gap: 10,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E9A000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PharmacyColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -3,
    right: -2,
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: PharmacyColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: PharmacyColors.white,
    fontSize: 9,
    fontWeight: '800',
  },
});
