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
    title: 'Angelcity Oversized Ringer Tops Plus Size Korean Fashion Women Basic tee ML',
    image: 'https://down-ph.img.susercontent.com/file/2b10779d50e2dca88d4dff5862c538b0.webp',
    price: 696,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '2',
    title: 'Angelcity Basic T Shirt Square Neck Short Sleeve Tee Tops',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7qul3-lh75ki1kez6o70.webp',
    price: 395,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '3',
    title: 'KILY.PH Bandana Tops New Fabric Embossed Crepe Sexy Croptop Ootd for Women 6A0253',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7qukw-ljnygi49x8bwd7.webp',
    price: 369,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '4',
    title: 'Trendy brand summer letters, new mens and womens prints, casual couples, and versatile T-shirts',
    image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rdxc-lzlc0xeeqxbg1a.webp',
    price: 735,
    rating: 4.8,
    sold: 6800,
  },
  {
    id: '5',
    title: 'RAmerican retro 100% hip-hop printed T-shirt loose large size mens washed',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7r98t-lut0jyoentjf16.webp',
    price: 1196,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '6',
    title: 'American retro 100% cotton car print T-shirt loose large size mens washed',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7r98y-lug8igyfk2qi9f.webp',
    price: 95,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '7',
    title: 'MSTR CO. Dont Try Shabu Clothing',
    image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rd3l-lvuj51v9jwscbf.webp',
    price: 639,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '8',
    title: 'DBTK Casual Colorful Letter Print Streetwear Short-Sleeved Cotton Men Women T-Shirt Quality Clothing',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7rasj-m1i3rio7r6g547.webp',
    price: 1735,
    rating: 4.8,
    sold: 6800,
  },
];

export default function CategoryClothing() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const capitalizedCategory = React.useMemo(() => {
    if (typeof category === 'string' && category.length > 0) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'Clothing';
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

