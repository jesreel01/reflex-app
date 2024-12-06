import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useRouter, Stack } from "expo-router"
import { ArrowLeft, CheckCircle2 } from 'lucide-react-native'

export default function SubscriptionScreen() {
  const router = useRouter()

  const handleRestorePurchase = () => {
    console.log('Restoring purchase...')
  }

  const handleBuyAgain = (productId: string) => {
    console.log('Buy again:', productId)
  }

  const paymentHistory = [
    {
      id: '1',
      planName: 'Premium Plan',
      billingType: 'Annual',
      amount: 1350.00,
      date: '2024-12-01',
      status: 'Active',
      discount: '50%'
    },
    {
      id: '2',
      planName: 'Basic Plan',
      billingType: 'Monthly',
      amount: 110.00,
      date: '2024-11-01',
      status: 'Expired',
    }
  ]

  return (
  <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1 bg-white">
        <View className="p-4">
          {/* Header */}
          <View className="flex-row items-center mb-6">
            <TouchableOpacity
              onPress={() => router.back()}
              className="p-2 -ml-2"
            >
              <ArrowLeft size={24} color="#000" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold ml-2">Subscription</Text>
          </View>

          {/* Subscription Plan Section */}
          <View className="mb-8">
            <Text className="text-lg font-medium mb-2">My Subscription Plan</Text>
            <Text className="text-3xl font-bold mb-4">Premium Plan</Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/feed-tab/subscription-content/plan-selection");
              }}
              className="bg-black py-3.5 rounded-lg"
            >
              <Text className="text-white text-center font-medium">Change Plan</Text>
            </TouchableOpacity>
          </View>

          {/* Payment History Section */}
        <View className="mb-8">
          <Text className="text-lg font-medium mb-4">Payment History</Text>
          {paymentHistory.length > 0 ? (
            <View className="space-y-4">
              {paymentHistory.map((item) => (
                <View key={item.id} className="bg-white rounded-lg border border-gray-200 p-4">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="font-medium text-lg">{item.planName}</Text>
                    <View className="flex-row items-center">
                      <CheckCircle2 size={16} className="text-green-500 mr-1" />
                      <Text className="text-green-500">{item.status}</Text>
                    </View>
                  </View>
                  
                  <View className="space-y-2">
                    <View className="flex-row justify-between">
                      <Text className="text-gray-500">Billing Type</Text>
                      <Text className="font-medium">{item.billingType}</Text>
                    </View>
                    
                    <View className="flex-row justify-between">
                      <Text className="text-gray-500">Amount</Text>
                      <View className="flex-row items-center">
                        {item.discount && (
                          <Text className="text-red-500 mr-2">-{item.discount}</Text>
                        )}
                        <Text className="font-medium">₱{item.amount.toFixed(2)}</Text>
                      </View>
                    </View>
                    
                    <View className="flex-row justify-between">
                      <Text className="text-gray-500">Date</Text>
                      <Text className="font-medium">
                        {new Date(item.date).toLocaleDateString()}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <Text className="text-gray-500">No payment history</Text>
          )}
        </View>

          {/* Restore Purchase Section */}
          <View className="items-center">
            <TouchableOpacity onPress={handleRestorePurchase}>
              <Text className="text-black font-medium mb-2">
                Restore a Purchase
              </Text>
            </TouchableOpacity>
            <Text className="text-gray-400 text-center text-sm px-8">
              *If the plan you are subscribing to is not reflected in the app,
              please Tap the 'Restore a Purchase' button
            </Text>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  </>
    
    
  )
}

