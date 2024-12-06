import { Pressable, Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "~/components/ui/section/carousel";
import { useRouter } from "expo-router";

export default function wardrobe() {

  const router = useRouter();
  return (
    <SafeAreaView className="px-5 py-5">
      <View className="mt-8 w-full">
        <Carousel />
      </View>
      <View>
        <Pressable
        onPress={() => {
          router.push("/feed-tab/shop-content/shop-ui");
        }}
        >
          <Text>Shop</Text>
        </Pressable>  
      </View>  
    </SafeAreaView>
    );
}


