import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";
import { BottomNav } from "~/components/ui/bottom-nav";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
