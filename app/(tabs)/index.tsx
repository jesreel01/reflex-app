import * as React from "react";
import { Pressable, ScrollView, View } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Colors, Spacings } from "react-native-ui-lib";
import _ from "lodash";
import { Card } from "~/components/ui/card";
import FeedGrid from "~/components/ui/section/feed-grid";
import Carousel from "~/components/ui/section/carousel";
import { cn } from "~/lib/utils";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Recommendation from "../feed-tab/recommendation";
import TrendingTab from "../feed-tab/trending";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

interface Tab {
  id: number;
  label: string;
  content: string;
}

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

  const [activeTab, setActiveTab] = React.useState(1);

  const Tab = createMaterialTopTabNavigator();

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

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarStyle: {
            elevation: 0, // Remove shadow on Android
            marginTop: 10,
            height: 45,
            borderTopWidth: 0, // Remove top border
            borderBottomWidth: 1, // Add bottom border
            borderBottomColor: Colors.grey50
          },
        }}
      >
        <Tab.Screen
          name="feed-tab/recommendation"
          component={Recommendation}
          options={{
            title: "For you",
          }}
        />
        <Tab.Screen
          name="feed-tab/trending"
          component={TrendingTab}
          options={{
            title: "Trending",
          }}
        />
        <Tab.Screen
          name="feed-tab/ideas"
          component={TrendingTab}
          options={{
            title: "Ideas",
          }}
        />
      </Tab.Navigator>

      <View className="mt-8 w-full"></View>
    </SafeAreaView>
  );
}
