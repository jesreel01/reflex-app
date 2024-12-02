import * as React from "react";
import { Pressable, View } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Carousel, Colors, Spacings } from "react-native-ui-lib";
import _ from "lodash";
import { Card } from "~/components/ui/card";
import { AntDesign, Fontisto } from "@expo/vector-icons";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }

  const BACKGROUND_COLORS = [
    Colors.red50,
    Colors.yellow20,
    Colors.purple50,
    Colors.green50,
    Colors.cyan50,
    Colors.purple20,
    Colors.blue60,
    Colors.red10,
    Colors.green20,
    Colors.purple60,
  ];

  return (
    <SafeAreaView className="flex-1 px-5 py-5">
      <View className="flex-row justify-between align-middle">
        <Text className="font-semibold text-2xl">Reflex</Text>
        <View className="flex-row gap-x-3 items-center">
          <Pressable
            className="rounded-full"
            android_ripple={{
              color: "rgba(0, 0, 0, 0.10)",
              radius: 18,
              borderless: true,
            }}
            onPress={() => console.log("Heart icon pressed")}
          >
            <Ionicons name="heart-outline" size={28} color="black" />
          </Pressable>
          <Pressable
            className="rounded-full"
            android_ripple={{
              color: "rgba(0, 0, 0, 0.10)",
              radius: 18,
              borderless: true,
            }}
            onPress={() => console.log("Heart icon pressed")}
          >
            <Ionicons name="notifications-outline" size={28} color="black" />
          </Pressable>
        </View>
      </View>

      <View className="mt-8 flex-row justify-start gap-x-4">
        <Avatar alt="Profile image" className="w-14 h-14">
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar>
        <View>
          <Text className="text-2xl font-semibold">Hello, John!</Text>
          <Text className="text-base text-muted-foreground font-semibold">
            How are you today?
          </Text>
        </View>
      </View>
      <View className="mt-8 w-full">
        <Carousel
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
              <AntDesign  name="calendar" size={28} color="black" />
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
              <AntDesign  name="calendar" size={28} color="black" />
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
              <AntDesign  name="calendar" size={28} color="black" />
            </View>
          </Card>
        </Carousel>
      </View>
    </SafeAreaView>
  );
}
