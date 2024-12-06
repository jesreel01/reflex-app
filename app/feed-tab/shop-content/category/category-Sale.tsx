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
    title: 'RWB PORSCHE 993 Turbo T-shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 196,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '2',
    title: 'WAVE TO EARTH Graphic T-shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 95,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '3',
    title: 'Minimalist Design T-shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 69,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '4',
    title: 'ETQT Worldwide Shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 735,
    rating: 4.8,
    sold: 6800,
  },
  {
    id: '5',
    title: 'RWB PORSCHE 993 Turbo T-shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 196,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '6',
    title: 'WAVE TO EARTH Graphic T-shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 95,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '7',
    title: 'Minimalist Design T-shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 69,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '8',
    title: 'ETQT Worldwide Shirt',
    image: '/placeholder.svg?height=200&width=200',
    price: 735,
    rating: 4.8,
    sold: 6800,
  },
];

export default function CategorySale() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const capitalizedCategory = React.useMemo(() => {
    if (typeof category === 'string' && category.length > 0) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'Sale';
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

