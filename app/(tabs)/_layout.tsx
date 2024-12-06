import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";
import { BottomNav } from "~/components/ui/bottom-nav";
import Svg, { Path } from "react-native-svg";
import Feather from "@expo/vector-icons/Feather";
import { WandSparkles, ScanQrCode, RefreshCwOff } from "lucide-react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),

          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ai-recommendation"
        options={{
          title: "AI Assistant",
          tabBarIcon: ({ color }) => <WandSparkles size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan QR",
          tabBarButton: (props) => <Pressable {...props} onPress={() => {
            console.log("Scan QR button pressed");
          }} />,
          tabBarIcon: ({ color }) => <ScanQrCode size={20} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wardrobe-outline"
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={20} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
