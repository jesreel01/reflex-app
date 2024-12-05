import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MasonryFlashList } from "@shopify/flash-list";

const data = [
  {
    id: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspectRatio: 606 / 910,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspectRatio: 644 / 910,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspectRatio: 606 / 910,
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/736x/2f/1e/0c/2f1e0cd93eb15b318a1de7f35ce2d816.jpg",
    aspectRatio: 512 / 910,
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/736x/67/b6/43/67b6434993b2f47cc4d9d713c3a7e0fd.jpg",
    aspectRatio: 450 / 675,
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/736x/7c/a0/72/7ca072e277e2617a759f25e6618d640b.jpg",
    aspectRatio: 697 / 910,
  },
  {
    id: "7",
    image:
      "https://i.pinimg.com/736x/60/19/e1/6019e11e92e0d677874bd437f9a4d86a.jpg",
    aspectRatio: 444 / 754,
  },
  {
    id: "8",
    image:
      "https://i.pinimg.com/736x/2a/fd/c9/2afdc9c5dc5e18d333046cd06b1e015b.jpg",
    aspectRatio: 682 / 910,
  },
];

const categories = ["All", "Recipes", "Decor", "Fashion ins"];

const TrendingTab = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { width } = useWindowDimensions();
  const numColumns = 2;
  const gap = 8;
  const itemWidth = (width - 20 * (numColumns + 1)) / numColumns;

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
      <Image
        source={{ uri: item.image }}
        style={{
          width: itemWidth,
          height: itemWidth / item.aspectRatio,
          backgroundColor: "#e0e0e0",
        }}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 h-auto mt-3">
      <MasonryFlashList
        data={data}
        numColumns={numColumns}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </SafeAreaView>
  );
};

export default TrendingTab;
