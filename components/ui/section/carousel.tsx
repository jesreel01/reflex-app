import { Text, View } from "react-native";
import React, { Component } from "react";
import { Carousel as RnCarousel, Spacings } from "react-native-ui-lib";
import { Card } from "~/components/ui/card";
import { AntDesign, Fontisto } from "@expo/vector-icons";

const Carousel = () => {
  return (
    <RnCarousel
      // onChangePage={onChangePage}
      pageWidth={340 - Spacings.s5 * 2}
      itemSpacings={Spacings.s3}
      initialPage={1}
      containerStyle={{ height: 80 }}
    >
      <Card className="h-[80px] border-0 bg-gray-100 p-3 item-center flex-row justify-between">
        <View>
          <View className="flex-row">
            <Text className="font-semibold text-lg">Sat </Text>
            <Text className="text-lg pt-[1px]">Nov 30</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold pr-4 text-xl">
              32/35 <Text className="text-muted-foreground">°C</Text>
            </Text>
            <Fontisto name="cloudy-gusts" size={18} />
          </View>
        </View>
        <View className="bg-white h-[60px] w-[60px] rounded-lg justify-center items-center">
          <AntDesign name="calendar" size={28} color="black" />
        </View>
      </Card>
      <Card className="h-[80px] border-0 bg-gray-100 p-3 item-center flex-row justify-between">
        <View>
          <View className="flex-row">
            <Text className="font-semibold text-lg"> Sun </Text>
            <Text className="text-lg pt-[1px]">Dec 01</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold pr-4 text-xl">
              32/35 <Text className="text-muted-foreground">°C</Text>
            </Text>
            <Fontisto name="cloudy-gusts" size={18} />
          </View>
        </View>
        <View className="bg-white h-[60px] w-[60px] rounded-lg justify-center items-center">
          <AntDesign name="calendar" size={28} color="black" />
        </View>
      </Card>
      <Card className="h-[80px] border-0 bg-gray-100 p-3 item-center flex-row justify-between">
        <View>
          <View className="flex-row">
            <Text className="font-semibold text-lg">Sat </Text>
            <Text className="text-lg pt-[1px]">Dec 02</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold pr-4 text-xl">
              32/35 <Text className="text-muted-foreground">°C</Text>
            </Text>
            <Fontisto name="cloudy-gusts" size={18} />
          </View>
        </View>
        <View className="bg-white h-[60px] w-[60px] rounded-lg justify-center items-center">
          <AntDesign name="calendar" size={28} color="black" />
        </View>
      </Card>
    </RnCarousel>
  );
};

export default Carousel;
