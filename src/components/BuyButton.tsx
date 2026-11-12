
import {View,Text,Pressable,StyleSheet,} from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

type BuyButtonProps = {
  onPress: () => void;
};

export default function BuyButton({ onPress }: BuyButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>BUY NOW</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  marginTop: 14,
  marginBottom: 4,
},
  button: {
  width: '100%',
  backgroundColor: PharmacyColors.primary,
  paddingVertical: 18,
  paddingHorizontal: 24,
  borderRadius: 30,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
buttonText: {
  color: PharmacyColors.black,
  fontSize: 15,
  fontWeight: '900',
  letterSpacing: 1.5,
},
  arrow: {
    color: PharmacyColors.white,
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
});
