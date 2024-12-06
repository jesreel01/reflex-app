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
    title: 'FTotoro Canvas Men woman Crossbody Shoulder Messenger Bag with Large Capacity for Men Boys Travel bag',
    image: 'https://down-ph.img.susercontent.com/file/80761d4254994190a15ee6b85962a785.webp',
    price: 1195,
    rating: 4.5,
    sold: 10000,
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
    title: 'O.Two.O Face Makeup Set 3pcs Primer Liquid Foundation+ Setting Spray Matte Long Lasting Natural Smooth Skin Cosmetics',
    image: 'https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lqilis30nn79d5.webp',
    price: 895,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '4',
    title: 'O.TWO.O Matte Lipstick Kissproof Lock Color Silky 24 Hour Long-Lasting Lip Makeup Waterproof',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7ras9-m17xbgw2iyr1c8.webp',
    price: 596,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '5',
    title: 'LEVELS K1001 High-quality Fashion Waterproof Sling Bag For Men',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7qukx-lk4qsarcx27g84.webp',
    price: 969,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '6',
    title: 'Samba OG Shoes',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg',
    price: 6669,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '7',
    title: 'DBTK Casual Colorful Letter Print Streetwear Short-Sleeved Cotton Men Women T-Shirt Quality Clothing',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7rasj-m1i3rio7r6g547.webp',
    price: 1735,
    rating: 4.8,
    sold: 6800,
  },
  {
    id: '8',
    title: 'Speedcat OG',
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/02/sv01/fnd/PNA/fmt/png/Speedcat-OG-Men's-Sneakers",
    price: 5735,
    rating: 4.8,
    sold: 6800,
  },
];

export default function CategoryAll() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const capitalizedCategory = React.useMemo(() => {
    if (typeof category === 'string' && category.length > 0) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'All';
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

