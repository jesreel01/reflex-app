import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Heart, ArrowLeft, Search, SlidersHorizontal, Star } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  sold: number;
}

const products: Product[] = [
  {
    id: '1',
    title: 'PINKFLASH 14PCS Makeup Set 1 Anniversary Full Face Sets Natural Makeup Cosmetics Matte Lipstick The #OhMyColor',
    image: 'https://down-ph.img.susercontent.com/file/785836b66e7ef5b24229b06add7bdc25.webp',
    price: 1196,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '2',
    title: 'O.Two.O Face Makeup Set 3pcs Primer Liquid Foundation+ Setting Spray Matte Long Lasting Natural Smooth Skin Cosmetics',
    image: 'https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lqilis30nn79d5.webp',
    price: 895,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '3',
    title: 'FOCALLURE SwitchMode Airy Matte Lip Tint Long-Lasting Waterproof Transfer-Proof Non-stick Lip Makeup',
    image: 'https://down-ph.img.susercontent.com/file/cn-11134207-7ras8-m2ng4itqi7dff8.webp',
    price: 469,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '4',
    title: '[BUY 3 GET 4!!] DAZZLE ME Get a Grip! Makeup Setting Spray Make Up Set Dewy Matte Fix Oil Control',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7ras9-m0mvlp6u6aum62.webp',
    price: 535,
    rating: 4.8,
    sold: 6800,
  },
  {
    id: '5',
    title: 'O.TWO.O Matte Lipstick Kissproof Lock Color Silky 24 Hour Long-Lasting Lip Makeup Waterproof',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7ras9-m17xbgw2iyr1c8.webp',
    price: 596,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '6',
    title: 'SACE LADY Matte Foundation Oil-control Full Coverage Long Lasting 24H Natural Flawless Face Makeup',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7rasa-m2m6cmairym767.webp',
    price: 295,
    rating: 4.5,
    sold: 10000,
  },
];

export default function CategoryCosmetics() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const capitalizedCategory = React.useMemo(() => {
    if (typeof category === 'string' && category.length > 0) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'Cosmetics';
  }, [category]);

  return (
    <>
    <Stack.Screen
          options={{
            headerShown: false,
          }}
        />

    <SafeAreaView className="flex-1">
      {/* Header */}
      <View className="bg-white pt-5">
        <View className="flex-row items-start justify-between px-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2">
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>

          <Text className="text-2xl font-bold">{capitalizedCategory}</Text>

          <View className="space-y-4">
            <TouchableOpacity className="p-2">
              <Heart size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Product Grid */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap px-2">
          {products.map((product) => (
            <View key={product.id} className="w-1/2 p-2">
              <View className="bg-white rounded-lg border border-gray-200">
                <Image
                  source={{ uri: product.image }}
                  className="w-full aspect-square rounded-t-lg"
                  resizeMode="cover"
                />
                <View className="p-2">
                  <Text numberOfLines={2} className="text-sm mb-1">
                    {product.title}
                  </Text>
                  <Text className="text-base font-semibold mb-1">₱{product.price}</Text>
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                      <Star size={12} color="#FFD700" fill="#FFD700" />
                      <Text className="text-xs text-gray-500 ml-1">{product.rating}</Text>
                    </View>
                    <Text className="text-xs text-gray-500">{product.sold} sold</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
  );
}

