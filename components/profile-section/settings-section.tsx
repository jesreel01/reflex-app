import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import {
  PieChart,
  Bot,
  Shirt,
  ClipboardList,
  Bell,
  Tag,
  Calendar,
  Thermometer,
  Globe,
  Flame,
  ChevronRight,
} from 'lucide-react-native';


const menuItems = [
  { icon: PieChart, label: 'Style Stats' },
  { icon: Bot, label: 'AI Styling' },
  { icon: Shirt, label: 'Outfit Suggestion Settings' },
  { icon: ClipboardList, label: 'Quick Closet Review' },
  { icon: Bell, label: 'Notifications' },
  { icon: Tag, label: 'Custom Brands' },
  { icon: Calendar, label: 'Week Start Day', value: 'Sunday' },
  { icon: Thermometer, label: 'Temperature Unit', value: '°C' },
  { icon: Globe, label: 'Language', value: 'English' },
  { icon: Flame, label: 'Subscription' },
];

const SettingsSection = () => {

  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View className="px-4 pt-4 bg-white">
        <Text className="text-gray-500 text-base">Account Settings</Text>
      </View>

      {/* Menu Items */}
      <View>
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            className="flex-row items-center px-1 py-5 bg-white active:bg-gray-50"
          >
            {({ pressed }) => (
              <>
                <item.icon size={30} color={pressed ? '#0a0a0a' : '#868686'} strokeWidth={1.5} />
                <Text
                  className={`flex-1 ml-3 text-base ${
                    pressed ? 'text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Text>
                {item.value ? (
                  <Text className={`mr-2 ${pressed ? 'text-gray-800' : 'text-gray-900'}`}>
                    {item.value}
                  </Text>
                ) : null}
                <ChevronRight size={16} color={pressed ? '#0a0a0a' : '#868686'} />
              </>
            )}
          </Pressable>
        ))}
      </View>

      <View className="px-4 pt-2 bg-white">
        <Text className="text-gray-500 text-base">Term and policies</Text>
      </View>

      <Pressable>
        {({ pressed }) => (
          <View className="flex-row items-center pt-6 bg-white active:bg-gray-50">
            <Text className={`flex-1 ml-3 text-xl font-semibold ${pressed ? 'text-gray-600' : 'text-gray-900'}`}>
              Services Terms
            </Text>
            <ChevronRight size={16} color={pressed ? '#0a0a0a' : '#868686'} />
          </View>
        )}
      </Pressable>
      <Pressable>
        {({ pressed }) => (
          <View className="flex-row items-center pt-5 bg-white active:bg-gray-50">
            <Text className={`flex-1 ml-3 text-xl font-semibold ${pressed ? 'text-gray-600' : 'text-gray-900'}`}>
              Privacy Policy
            </Text>
            <ChevronRight size={16} color={pressed ? '#0a0a0a' : '#868686'} />
          </View>
        )}
      </Pressable>

    </ScrollView>
  );
};

export default SettingsSection;
