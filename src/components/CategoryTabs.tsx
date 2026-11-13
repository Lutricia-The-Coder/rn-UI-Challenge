
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
    { name: 'Relax', icon: 'leaf-outline' as const },
    { name: 'Sleep', icon: 'moon-outline' as const },
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
            <Ionicons
              name={category.icon}
              size={18}
              color={PharmacyColors.black}
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
