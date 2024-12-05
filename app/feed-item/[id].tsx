import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getItem } from "~/data/feed";
import { EllipsisVertical } from "lucide-react-native";

const FeedItemScreen = () => {
  const router = useRouter();

  // get id from router
  const { id } = useGlobalSearchParams();

  const item = getItem(id as string);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Details",
          headerRight: () => (
            <Pressable
              className="rounded-full"
              android_ripple={{
                color: "rgba(0, 0, 0, 0.10)",
                radius: 18,
                borderless: true,
              }}
              onPress={() => console.log("Heart icon pressed")}
            >
              <EllipsisVertical size={22} color="black" />
            </Pressable>
          ),
        }}
      />
      <View className="flex-1 bg-white">
        <ScrollView>
          <View className="relative p-4">
            <Image
              source={{ uri: item?.image }}
              className="w-full rounded-2xl"
              style={{ aspectRatio: item?.aspectRatio }}
              resizeMode="cover"
            />
            <View className="absolute bottom-8 right-8 flex-row">
              <Pressable
                android_ripple={{
                  color: "rgba(0, 0, 0, 0.10)",
                  radius: 19,
                  borderless: true,
                }}
                className="bg-white rounded-full p-2 mr-2"
              >
                <Ionicons name="heart-outline" size={24} color="black" />
              </Pressable>
              <Pressable
                android_ripple={{
                  color: "rgba(0, 0, 0, 0.10)",
                  radius: 19,
                  borderless: true,
                }}
                className="bg-white rounded-full p-2"
              >
                <Ionicons name="share-outline" size={24} color="black" />
              </Pressable>
            </View>
          </View>

          <View className="m-3 border-t border-gray-300 mx-5">
            <Text className="text-xl font-bold mt-5 mb-2 text-slate-600">More to explore</Text>
            <View className="flex-row">
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/83/08/83/830883072b42cd4e1520f349ede7ac45.jpg",
                }}
                className="w-1/2 rounded-lg mr-2"
                style={{ aspectRatio: 474 / 711 }}
              />
              <Image
                source={{ uri: "https://i.pinimg.com/736x/bc/c8/bd/bcc8bd8f709f94920d2fc33ece8ba6e2.jpg" }}
                className="w-1/2 rounded-lg"
                style={{ aspectRatio: 657 / 821 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default FeedItemScreen;
