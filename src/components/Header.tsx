
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

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
          <Text style={styles.icon}>♙</Text>
        </Pressable>

        <Pressable
          style={styles.iconButton}
          onPress={() => console.log('Cart pressed')}
        >
          <Text style={styles.icon}>🛍</Text>
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
    paddingHorizontal: 22,
    paddingVertical: 15,
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: PharmacyColors.black,
    letterSpacing: -1.5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconButton: {
    width: 42,
    height: 42,
    backgroundColor: PharmacyColors.white,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 21,
    color: PharmacyColors.black,
  },
});
