import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "~/components/ui/section/carousel";

export class wardrobe extends Component {
  render() {
    return (
      <SafeAreaView className="px-5 py-5">
        <View className="mt-8 w-full">
          <Carousel />
        </View>
      </SafeAreaView>
    );
  }
}

export default wardrobe;
