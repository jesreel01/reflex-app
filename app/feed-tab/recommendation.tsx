import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MasonryFlashList } from "@shopify/flash-list";
import { getRecommendation } from "~/data/feed";
import { useNavigation, useRouter } from "expo-router";

const categories = ["All", "Recipes", "Decor", "Fashion ins"];

const Recommendation = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { width } = useWindowDimensions();
  const numColumns = 2;
  const gap = 8;
  const itemWidth = (width - 20 * (numColumns + 1)) / numColumns;

  const router = useRouter();

  const renderItem = ({
    item,
  }: {
    item: { id: string; image: string; aspectRatio: number };
  }) => (
    <View
      style={{
        width: itemWidth,
        marginBottom: gap,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          router.push(`/feed-item/${item.id}`);
        }}
        activeOpacity={0.7}
        style={{ borderRadius: 8, overflow: "hidden" }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: itemWidth,
            height: itemWidth / item.aspectRatio,
            backgroundColor: "#e0e0e0",
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 h-auto mt-3">
      <MasonryFlashList
        data={getRecommendation()}
        numColumns={numColumns}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </SafeAreaView>
  );
};

export default Recommendation;
