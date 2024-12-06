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
    title: 'Steel Warrior Flame Necklace',
    image: 'https://down-ph.img.susercontent.com/file/sg-11134301-7rd42-luh95o0jhaih1a.webp',
    price: 296,
    rating: 4.6,
    sold: 557,
  },
  {
    id: '2',
    title: ' Vintage Flame Rings Set Fashion',
    image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7qvcw-lhgc5oyzyd3hf6@resize_w450_nl.webp',
    price: 395,
    rating: 4.5,
    sold: 1454,
  },
  {
    id: '3',
    title: 'Pearl Zircon Elegant Earrings for Women ',
    image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7qul9-liqpeam765p80c.webp',
    price: 369,
    rating: 4.0,
    sold: 1400,
  },
  {
    id: '4',
    title: 'TBK Magnetic Bracelet for Unisex Fashion',
    image: 'https://down-ph.img.susercontent.com/file/14ac19b1935efc3b14487e078c16bde9@resize_w450_nl.webp',
    price: 735,
    rating: 4.8,
    sold: 6800,
  },
  {
    id: '5',
    title: ' Watch For Men Water proof Original Stainless Steel Strap',
    image: 'https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-luilwm3k06qm88@resize_w450_nl.webp',
    price: 1396,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '6',
    title: 'Bostanten Leather Wallet For Men Original Zipper Coin Purse',
    image: 'https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lwrzgloabadh80.webp',
    price: 895,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '7',
    title: 'Black Beads Chain with Square Pendant Necklace for Men Trendy Beaded Chains Accessories on the Neck Collar 2024 Fashion Jewelry',
    image: 'https://down-ph.img.susercontent.com/file/sg-11134301-7rceb-lt9kevpvz75jb3.webp',
    price: 169,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '8',
    title: 'Fashion Simple Couple Stainless Steel Anti-Fade Bracelet Gold Silver Gun Black Rose Gold Glossy Bracelet Unique Glossy Bracelet Male',
    image: 'https://down-ph.img.susercontent.com/file/sg-11134301-7rcc7-ltgg4me2sniefc.webp',
    price: 735,
    rating: 4.8,
    sold: 6800,
  },
];

export default function CategoryAccessories() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const capitalizedCategory = React.useMemo(() => {
    if (typeof category === 'string' && category.length > 0) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'Accessories';
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

