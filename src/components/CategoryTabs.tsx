
import {View,Text, Pressable,StyleSheet, Image,} from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

type CategoryTabsProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  const categories = [
    {
      name: 'Relax',
      image: require('@/assets/images/Relax-icon.png'),
    },
    {
      name: 'Sleep',
      image: require('@/assets/images/Sleep-icon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const selected = selectedCategory === category.name;

        return (
          <Pressable
            key={category.name}
            onPress={() => onSelectCategory(category.name)}
            style={({ pressed }) => [
              styles.tab,
              pressed && styles.pressedTab,
            ]}
          >
            <Image
              source={category.image}
              style={styles.categoryIcon}
              resizeMode="contain"
            />

            <Text
              style={[
                styles.tabText,
                selected && styles.selectedText,
              ]}
            >
              {category.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },

  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 5,
  },

  categoryIcon: {
    width: 30,
    height: 40,
  },

  pressedTab: {
    opacity: 0.65,
  },

  tabText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    color: PharmacyColors.secondaryText,
  },

  selectedText: {
    color: PharmacyColors.black,
    fontWeight: '900',
  },
});
