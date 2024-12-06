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
    title: 'Air Jordan 1 Low',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c5861ce4-7e91-4eed-a819-2c5e5eaa1ad3/WMNS+AIR+JORDAN+1+LOW.png',
    price: 4196,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '2',
    title: 'Nike Cortez Leather',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/236a53ed-106f-44bb-855d-05abab45f414/W+NIKE+CORTEZ.png',
    price: 5495,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '3',
    title: 'Nike Air Force 1',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/AIR+FORCE+1+%2707+FRESH.png',
    price: 7669,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '4',
    title: 'Speedcat OG',
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/02/sv01/fnd/PNA/fmt/png/Speedcat-OG-Men's-Sneakers",
    price: 5735,
    rating: 4.8,
    sold: 6800,
  },
  {
    id: '5',
    title: 'Palermo Leather',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/396464/03/sv01/fnd/PNA/fmt/png/Palermo-Leather-Sneakers',
    price: 5196,
    rating: 4.5,
    sold: 157,
  },
  {
    id: '6',
    title: 'Redon Bungee',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/388167/02/sv01/fnd/PNA/fmt/png/Redon-Bungee-Shoes',
    price: 4595,
    rating: 4.5,
    sold: 10000,
  },
  {
    id: '7',
    title: 'Samba OG Shoes',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg',
    price: 6669,
    rating: 4.0,
    sold: 10000,
  },
  {
    id: '8',
    title: 'ULTRABOOST 1.0 SHOES',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3162c1a7c7a4de3b509b32ce1cacfd3_9366/ULTRABOOST_1.0_SHOES_White_JH6584_HM1.jpg',
    price: 11735,
    rating: 4.8,
    sold: 6800,
  },
];

export default function CategoryShoes() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  const capitalizedCategory = React.useMemo(() => {
    if (typeof category === 'string' && category.length > 0) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'Shoes';
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

