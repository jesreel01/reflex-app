import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Pressable } from 'react-native'
import { Heart, Search, ChevronRight } from 'lucide-react-native'
import { Stack, useRouter } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, CheckCircle2 } from 'lucide-react-native'

interface StoreCircleProps {
  name: string
  logo: string
  hasAI?: boolean
}

interface CategoryItemProps {
  name: string;
  slug: string;
  isRed?: boolean;
}

const StoreCircle = ({ name, logo, hasAI }: StoreCircleProps) => (
  

  <View className="items-center mr-4">
    <View className="relative">
      <View className="w-16 h-16 rounded-full bg-white shadow-sm overflow-hidden">
        <Image
          source={{ uri: logo }}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>
      {hasAI && (
        <View className="absolute -bottom-1 right-0 h-5 w-5 bg-black rounded-full p-1">
          <Text className="text-white text-[8px] ml-0.5">AI</Text>
        </View>
      )}
    </View>
    <Text className="text-sm mt-1 text-center">{name}</Text>
  </View>
)

const CategoryItem = ({ name, slug, isRed }: CategoryItemProps) => (
  <TouchableOpacity className="flex-row items-center justify-between bg-white rounded-lg p-4 mb-2">
    <Text className={`text-base ${isRed ? 'text-red-500' : 'text-black'}`}>{name}</Text>
    <ChevronRight size={20} color="#000" />
  </TouchableOpacity>
)

export default function ShopScreen() {
  const router = useRouter()

  const aiStores = [
    { name: 'Penshoppe', logo: 'https://cashback4.findshare.com/images/merchants-transparent-png/penshoppe.png' },
    { name: 'Bench', logo: 'https://awards.brandingforum.org/wp-content/uploads/2017/11/BENCH-logo.jpg' },
    { name: 'Regatta', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU1hlQMEz5Hd_yFdLjclmk511HpLrFsTOFw&s' },
    { name: 'H&M', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifn7PA-XEOxP0LjD2Sd0HrNS8m2hQaIzFAA&s' },
    { name: 'UNIQLO', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/772px-UNIQLO_logo.svg.png' },
    { name: 'ZALORA', logo: 'https://play-lh.googleusercontent.com/1uXuiNKfgeFsqyfBcBuOFujQyJ6A8htuNiqLflpOfwyvb9msAyVjZ_UurORD7PAB2FM' },
    { name: 'Shopee', logo: 'https://i.pinimg.com/736x/77/7d/c8/777dc8f47b66af05caff4015d5f416d8.jpg' },
    { name: 'Lazada', logo: 'https://i.pinimg.com/474x/fc/b3/f6/fcb3f6e99f045c903ae62735b3c18086.jpg' },
  ]

  const personalStores = [
    { name: "LOUIS VUITTON", logo: 'https://download.logo.wine/logo/Louis_Vuitton/Louis_Vuitton-Logo.wine.png' },
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg' },
    { name: 'Hermès', logo: 'https://logo.com/image-cdn/images/kts928pd/production/59f2aa87d3c8527e5f6adfb709080f5bf69c11f7-1024x600.png?w=1920&q=72&fm=webp' },
    { name: 'Cartier', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTj12nNxksxg8MmXKcYnuRnJ5ynBfLI39DJA&s' },
    { name: 'Dior', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/2560px-Dior_Logo.svg.png' }, 
    { name: 'Chanel', logo: 'https://banner2.cleanpng.com/20180502/kiw/avdsv3yp8.webp' },
    { name: 'Adidas', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbwTVXA1T-nL3d0CIcJC_UUsSupL0mO4i7A&s' },

  ]

  const categories = [
    { name: 'All', slug: 'all' },
    { name: 'Clothing', slug: 'clothing' },
    { name: 'Shoes', slug: 'shoes' },
    { name: 'Cosmetics', slug: 'cosmetics' },
    { name: 'Accessories', slug: 'accessories' },
    { name: 'Bags', slug: 'bags' },
    { name: 'Sale', slug: 'sale' }
  ]; 

  return (
    <>
      <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="flex-row items-center mb-2 pl-7 pt-5">
            <TouchableOpacity
              onPress={() => router.back()}
              className="p-2 -ml-2"
            >
              <ArrowLeft size={24} color="#000" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold ml-1 flex-1 justify-center items-center">MyShop</Text>
          </View>

          {/* Search Bar */}
          <View className="px-4 mb-6">
            <View className="flex-row items-center bg-white rounded-lg px-4 py-2.5 shadow-sm">
              <Search size={20} color="#9CA3AF" />
              <TextInput
                placeholder="Search"
                className="flex-1 ml-2 text-base"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* AI Stylist Section */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center px-4 mb-2">
              <Text className="text-lg font-semibold">Shop with your AI Stylist</Text>
              <TouchableOpacity>
                <Text className="text-gray-500">View all</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-500 px-4 mb-4">
              Browse stores you love and check if a piece fits your style and closet before you buy it.
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
              {aiStores.map((store, index) => (
                <StoreCircle key={index} {...store} hasAI />
              ))}
            </ScrollView>
          </View>

          {/* Personal Catalog Section */}
          <View className="mb-6">
            <Text className="text-lg font-semibold px-4 mb-4">
              Shop your Personal catalog
            </Text>
            <View className="px-4 mb-4">
              <Text className="text-lg font-semibold mb-2">Stores</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {personalStores.map((store, index) => (
                  <StoreCircle key={index} {...store} />
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Categories Section */}

          <View className="px-4 mb-6">
        <Text className="text-lg font-semibold mb-2">Categories</Text>
        <View>
          {categories.map((category, index) => (
            <Pressable
              key={index}
              className="flex-row items-center px-4 py-3 bg-white active:bg-gray-50 rounded-lg mb-2"
              onPress={() => {
                if (category.name === 'All') {
                  // to open the All category
                  router.push({
                    pathname: "/feed-tab/shop-content/category/category-All", 
                  });
                } else if(category.name === 'Clothing'){
                  router.push({
                    pathname: "/feed-tab/shop-content/category/category-clothing", 
                  });
                }else if(category.name === 'Shoes'){
                  router.push({
                    pathname: "/feed-tab/shop-content/category/category-Shoes", 
                  });
                }else if(category.name === 'Cosmetics'){
                  router.push({
                    pathname: "/feed-tab/shop-content/category/category-Cosmetics", 
                  });
                }else if(category.name === 'Accessories'){
                  router.push({
                    pathname: "/feed-tab/shop-content/category/category-Accessories", 
                  });
                }else if(category.name === 'Bags'){
                  router.push({
                    pathname: "/feed-tab/shop-content/category/category-Bags", 
                  });
                }else if(category.name === 'Sale'){
                  router.push({
                    pathname: "/feed-tab/shop-content/category/category-Shoes", 
                  });
                }
                
              }}
            >
              {({ pressed }) => (
                <>
                  <Text
                    className={`flex-1 text-base ${
                      pressed ? 'text-gray-900' : 'text-gray-600'
                    } ${category.name === 'Sale' ? 'text-red-500' : ''}`}
                  >
                    {category.name}
                  </Text>
                  <ChevronRight size={20} color={pressed ? '#0a0a0a' : '#868686'} />
                </>
              )}
            </Pressable>
          ))}
        </View>
      </View>


          {/* Exclusive Offers Section */}
          <View className="px-4 mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center">
                <Text className="text-lg font-semibold">Exclusive offers</Text>
                <View className="bg-red-500 rounded-full w-5 h-5 ml-2 items-center justify-center">
                  <Text className="text-white text-xs">1</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text className="text-gray-500">View all</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="bg-white rounded-lg overflow-hidden shadow-sm">
              <Image
                source={{ uri: 'https://pbs.twimg.com/media/EXcXDtuXYAQuW6S.jpg' }}
                className="w-full h-48"
                resizeMode="cover"
              />
              <View className="p-3">
                <Text className="font-semibold">NIKE</Text>
                <Text className="text-lg font-bold mt-1">UP TO 50% OFF</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      
    </>
  )
}

