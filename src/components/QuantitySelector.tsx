
import { View,Text,Pressable,StyleSheet,} from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

type QuantitySelectorProps = {
  quantity: number;
  onChange: (quantity: number) => void;
};

export default function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={() => onChange(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
      >
        <Text
          style={[
            styles.symbol,
            quantity <= 1 && styles.disabledSymbol,
          ]}
        >
          −
        </Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={() => onChange(quantity + 1)}
      >
        <Text style={styles.symbol}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'flex-start',
  width: 150,
  height: 50,
  paddingHorizontal: 7,
  backgroundColor: PharmacyColors.lightBackground,
  borderRadius: 25,
  borderWidth: 0,
  marginVertical: 12,
},
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PharmacyColors.lightBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
  symbol: {
    fontSize: 23,
    fontWeight: '600',
    color: PharmacyColors.black,
  },
  disabledSymbol: {
    color: PharmacyColors.muted,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '800',
    color: PharmacyColors.black,
  },
});
