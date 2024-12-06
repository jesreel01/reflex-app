import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React, { Component, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "~/components/ui/section/carousel";
import { useRouter } from "expo-router";
import { Archive, Shirt } from 'lucide-react-native'
import Ionicons from "@expo/vector-icons/Ionicons"


export default function WardrobeView() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('closet')

  const clothingItems = [
    {
      id: 1,
      title: 'All clothes',
      image: 'https://oldnavy.com.ph/cdn/shop/products/cn28206832_1200x.jpg?v=1685425419',
    },
    {
      id: 2,
      title: 'Formal clothes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCVKxazFvW0P1ExrlBd9mxFNdNiY2lKSl0hSkD0uUGZppGb9XvvR51AY8c_qU13hEawk&usqp=CAU',
    },
  ]

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 py-5">
        <Text className="text-2xl font-bold text-left mb-8">Wardrobe</Text>
        
        {/* Carousel Section */}
        <View className="w-full mb-8">
          <Carousel />
        </View>

        {/* Tabs */}
        <View className="flex-row border-b border-gray-200 mb-6">
          <Pressable
            className={`flex-1 pb-2 ${
              activeTab === 'closet' ? 'border-b-2 border-black' : ''
            }`}
            onPress={() => setActiveTab('closet')}
          >
            <Text
              className={`text-center ${
                activeTab === 'closet' ? 'text-black' : 'text-gray-400'
              }`}
            >
              Closet
            </Text>
          </Pressable>
          <Pressable
            className={`flex-1 pb-2 ${
              activeTab === 'outfit' ? 'border-b-2 border-black' : ''
            }`}
            onPress={() => setActiveTab('outfit')}
          >
            <Text
              className={`text-center ${
                activeTab === 'outfit' ? 'text-black' : 'text-gray-400'
              }`}
            >
              Outfit
            </Text>
          </Pressable>
        </View>

        {/* Grid Layout */}
        <ScrollView >
          <View className="flex-1 flex-row flex-wrap justify-between">
            {clothingItems.map((item) => (
              <Pressable
                key={item.id}
                className="w-[48%] aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden"
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                  <Text className="text-white text-sm">{item.title}</Text>
                </View>
              </Pressable>
            ))}
            <Pressable className="w-[48%] aspect-square bg-gray-100 rounded-lg mb-4 items-center justify-center py-16">
              <Ionicons name="shirt-outline" size={40} color="gray" className="text-gray-400"/>
              <Text className="text-gray-400 mt-2">Create closet</Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* Bottom Actions */}
        <View className="mt-4 space-y-3">
          <Pressable className="flex-row items-center justify-center space-x-2 py-3 bg-gray-100 rounded-lg">
            <Archive size={20} />
            <Text className="font-medium mr-5">Archive</Text>
          </Pressable>
          
          <Pressable
            className="py-3 bg-black rounded-lg"
            onPress={() => {
              router.push("/feed-tab/shop-content/shop-ui")
            }}
          >
            <Text className="text-white font-medium text-center">Shop</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}


