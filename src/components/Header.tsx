
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable,StyleSheet,Image,} from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Pressable
          style={styles.backButton}
          onPress={() => console.log('Back pressed')}
        >
          <Ionicons name="chevron-back" size={28} color={PharmacyColors.black} />
        </Pressable>

        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.logo}>xefag</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.profileButton}
          onPress={() => console.log('Profile pressed')}
        >
          <Ionicons name="person-outline" size={21} color={PharmacyColors.white} />
        </Pressable>

        <Pressable
          style={styles.cartButton}
          onPress={() => console.log('Cart pressed')}
        >
          <Ionicons name="bag-handle-outline" size={23} color={PharmacyColors.black} />
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
    paddingVertical: 8,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  logoImage: {
    width: 38,
    height: 38,
  },
logo: {
  fontSize: 32,
  fontFamily: 'Rosmatika',
  color: PharmacyColors.black,
  lineHeight: 44,
  paddingBottom: 0,
  transform: [{ translateY: 4 }],
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#beae96d2',
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
