import { View, Text, Pressable, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@expo/vector-icons/Ionicons"
import SettingsScreen from '~/components/profile-section/settings-section'



const profile = () => {
  return (
    <SafeAreaView className="flex-1 px-5 py-5">
      <View className="flex-row justify-between align-middle">
        <Text className="font-semibold text-2xl">Mypage</Text>
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

      <SettingsScreen />

    </SafeAreaView>
  )
}

export default profile