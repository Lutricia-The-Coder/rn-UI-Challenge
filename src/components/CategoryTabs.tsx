
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

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
            style={({ pressed }) => [
              styles.tab,
              selected && styles.selectedTab,
              pressed && styles.pressedTab,
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
    alignItems: 'center',
    gap: 14,
    marginTop: 22,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  tab: {
    width: 135,
    paddingVertical: 14,
    borderRadius: 30,
    backgroundColor: PharmacyColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: PharmacyColors.white,
  },
  selectedTab: {
    backgroundColor: PharmacyColors.black,
    borderColor: PharmacyColors.black,
  },
  pressedTab: {
    opacity: 0.8,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    color: PharmacyColors.black,
  },
  selectedText: {
    color: PharmacyColors.white,
  },
});
