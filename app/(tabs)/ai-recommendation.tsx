import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";

type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
  items?: ClothingItem[];
};

type ClothingItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
};

const suggestedQuestions = [
  "What's trendy this season?",
  "How do I style a white t-shirt?",
  "Suggest an outfit for a summer wedding",
  "What are must-have accessories?",
  "How can I dress business casual?",
];

const aiResponses = [
  {
    text: "Great question! Here are some trendy items for this season:",
    hasItems: true,
  },
  { text: "I'd recommend pairing that with:", hasItems: true },
  {
    text: "Here's a style tip: Mix and match patterns for a bold look.",
    hasItems: false,
  },
  {
    text: "Have you considered adding accessories? Here are some suggestions:",
    hasItems: true,
  },
  {
    text: "That's a classic choice! You could try these variations:",
    hasItems: true,
  },
  { text: "For a more casual look, consider these options:", hasItems: true },
  {
    text: "Here's a pro tip: Invest in quality basics for a versatile wardrobe.",
    hasItems: false,
  },
  {
    text: "Color coordination is key. Try pairing these items:",
    hasItems: true,
  },
  {
    text: "Don't forget about layering! Here are some great pieces for that:",
    hasItems: true,
  },
  {
    text: "Remember, confidence is your best accessory. But these items can help too:",
    hasItems: true,
  },
];

export default function AiRecommendation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome! I'm your AI Stylist. How can I help you today?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = (text: string) => {
    if (text.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");

      // Simulate AI response
      setTimeout(() => {
        const randomResponse =
          aiResponses[Math.floor(Math.random() * aiResponses.length)];
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: randomResponse.text,
          sender: "ai",
          items: randomResponse.hasItems ? generateRandomItems() : undefined,
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 1000);
    }
  };

  const generateRandomItems = (): ClothingItem[] => {
    const brands = [
      "KASSL EDITIONS",
      "VALENTINO GARAVANI",
      "GUCCI",
      "PRADA",
      "BALENCIAGA",
    ];
    const items = [
      "Coat",
      "Jeans",
      "Shirt",
      "Dress",
      "Shoes",
      "Bag",
      "Scarf",
      "Hat",
    ];
    return Array.from({ length: 2 }, (_, i) => ({
      id: `item${i}`,
      name: items[Math.floor(Math.random() * items.length)],
      brand: brands[Math.floor(Math.random() * brands.length)],
      price: Math.floor(Math.random() * 2000) + 500,
      image: `https://picsum.photos/300/400?random=${i}`,
    }));
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      sendMessage(
        `I've uploaded an image. Can you suggest items that would go well with this?`
      );
      // Here you would typically send the image to your backend for processing
    }
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <>
      <View className="flex-1 bg-gray-100">
        <View className="flex-1">
          <ScrollView
            ref={scrollViewRef}
            className="flex-1 p-5 mb-4"
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
          >
            {messages.map((message) => (
              <View
                key={message.id}
                className={`mb-4 ${
                  message.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <View
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.sender === "user" ? "bg-slate-500" : "bg-white"
                  }`}
                >
                  <Text
                    className={
                      message.sender === "user" ? "text-white" : "text-black"
                    }
                  >
                    {message.text}
                  </Text>
                </View>
                {message.items && (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mt-2"
                  >
                    {message.items.map((item) => (
                      <View
                        key={item.id}
                        className="w-40 bg-white rounded-lg p-2 mr-2"
                      >
                        <Image
                          source={{ uri: item.image }}
                          className="w-full h-48 rounded-lg mb-2"
                        />
                        <Text className="font-bold">{item.name}</Text>
                        <Text>{item.brand}</Text>
                        <Text className="font-bold">
                          ₱{formatPrice(item.price)}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
            ))}
          </ScrollView>
          <View className="p-4 bg-white border-t border-gray-200">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-4"
            >
              {suggestedQuestions.map((question, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => sendMessage(question)}
                  className="bg-gray-200 rounded-full px-4 py-2 mr-2"
                >
                  <Text>{question}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View className="flex-row items-center">
              <TouchableOpacity onPress={pickImage} className="mr-2">
                <Ionicons name="image" size={24} color="black" />
              </TouchableOpacity>
              <TextInput
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 mr-2"
                value={input}
                onChangeText={setInput}
                placeholder="Ask me any style question..."
              />
              <TouchableOpacity onPress={() => sendMessage(input)}>
                <Ionicons name="send" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
