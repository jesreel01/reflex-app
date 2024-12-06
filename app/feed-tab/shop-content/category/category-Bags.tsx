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
    title: 'Bostanten Ladies Shoulder Bag Leather Crossybody Multi-use For Woman Bag',
    image: 'https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lvogh9v21ikud5.webp',
    price: 1396,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '2',
    title: 'Messenger Bag Fashion Casual Shoulder Bag sling bag unisex Student School bag chest Crossbody bag',
    image: 'https://down-ph.img.susercontent.com/file/c0474026383f0d182fd851184329e987.webp',
    price: 495,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '3',
    title: 'LEVELS K1001 High-quality Fashion Waterproof Sling Bag For Men',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7qukx-lk4qsarcx27g84.webp',
    price: 969,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '4',
    title: 'ETQT Worldwide ShirtShigetsu GERO plain black leather men sling bag crossbody bag shoulder bag for men sling bag sidebag',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134201-7rasi-m2hyfmx9s7gc95.webp',
    price: 735,
    rating: 4.8,
    sold: 6800,
  },
  {
    id: '5',
    title: 'Mark Ryden Men Mini Shoulder Bag',
    image: 'https://down-ph.img.susercontent.com/file/95ab3219be26823c05a87d78f468760d.webp',
    price: 1296,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '6',
    title: 'FTotoro Canvas Men woman Crossbody Shoulder Messenger Bag with Large Capacity for Men Boys Travel bag',
    image: 'https://down-ph.img.susercontent.com/file/80761d4254994190a15ee6b85962a785.webp',
    price: 1195,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '7',
    title: 'OLUNTEER Business Casual Crossbody Fashion Sling Bag PU Leather Texture Shoulder Bags',
    image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rd61-luylbs2l1f7l35.webp',
    price: 69,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '8',
    title: 'LEVELS K1002 Sling Bag For Men High-quality Fashion Waterproof Shoulder Bags',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7r98y-lpdcxdsuiga141.webp',
    price: 1735,
    rating: 4.8,
    sold: 6800,
  },
];

export default function CategoryBags() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const capitalizedCategory = React.useMemo(() => {
    if (typeof category === 'string' && category.length > 0) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'Bags';
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

