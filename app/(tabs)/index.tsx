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

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
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

      <View className="flex-row justify-start">
        <Text>Profile Icon</Text>
        <View>
          <Text className="text-lg font-semibold">John Doe</Text>
          <Text className="text-sm text-muted-foreground">
            Software Engineer
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
