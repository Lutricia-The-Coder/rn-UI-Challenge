
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PharmacyColors from '@/constants/pharmacy-colors';

type CategoryTabsProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  const categories = ['RELAX', 'SLEEP'];

  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const selected = selectedCategory === category;

        return (
          <Pressable
            key={category}
            onPress={() => onSelectCategory(category)}
            style={[
              styles.tab,
              selected && styles.selectedTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selected && styles.selectedText,
              ]}
            >
              {category}
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
    justifyContent: 'center',
    gap: 12,
    marginVertical: 18,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
    backgroundColor: PharmacyColors.white,
  },
  selectedTab: {
    backgroundColor: PharmacyColors.black,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: PharmacyColors.black,
  },
  selectedText: {
    color: PharmacyColors.white,
  },
});
