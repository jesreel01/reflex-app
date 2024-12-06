import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Check } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, useRouter } from "expo-router"
import { ArrowLeft } from 'lucide-react-native'

interface PlanFeature {
  text: string
  subtext?: string
}

interface PlanProps {
  name: string
  monthlyPrice: number
  annualPrice: number
  discount: number
  features: PlanFeature[]
  isSelected?: boolean
  onSelect?: () => void
}

const PlanCard = ({ name, monthlyPrice, annualPrice, discount, features, isSelected, onSelect }: PlanProps) => {
  const monthlyEquivalent = annualPrice / 12

  return (
    <View className={`bg-white rounded-lg border ${isSelected ? 'border-black' : 'border-gray-200'} p-4 mb-4`}>
      <Text className="text-xl font-semibold mb-4">{name}</Text>
      
      {/* Annual Billing Option */}
      <TouchableOpacity 
        className="bg-gray-900 rounded-lg p-4 mb-3"
        onPress={onSelect}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-medium">Billed Annually</Text>
          <View className="items-end">
            <Text className="text-gray-400 text-sm">Available for ₱{monthlyEquivalent.toFixed(2)}/mo</Text>
            <View className="flex-row items-center">
              <Text className="text-red-500 mr-2">{discount}%</Text>
              <Text className="text-white font-medium">₱{annualPrice.toFixed(2)}/yr</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Monthly Billing Option */}
      <TouchableOpacity 
        className="border border-gray-200 rounded-lg p-4 mb-4"
        onPress={onSelect}
      >
        <View className="flex-row justify-between items-center">
          <Text className="font-medium">Billed Monthly</Text>
          <Text className="font-medium">₱{monthlyPrice.toFixed(2)}/mo</Text>
        </View>
      </TouchableOpacity>

      {/* Features */}
      <Text className="text-gray-600 mb-3">All features of the free plan +</Text>
      <View className="space-y-2">
        {features.map((feature, index) => (
          <View key={index} className="flex-row">
            <Check size={20} className="text-gray-600 mr-2" />
            <View>
              <Text className="text-gray-600">{feature.text}</Text>
              {feature.subtext && (
                <Text className="text-gray-400 text-sm">{feature.subtext}</Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null)
  const router = useRouter()

  const plans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      annualPrice: 0,
      discount: 0,
      features: [
        { text: 'Register up to 100 clothes' },
        { text: 'Basic outfit planning' },
        { text: 'Limited storage space' }
      ]
    },
    {
      name: 'Basic',
      monthlyPrice: 110,
      annualPrice: 810,
      discount: 39,
      features: [
        { text: 'Register up to 1000 clothes', subtext: '*Includes archived clothes' },
        { text: 'Backup all clothes, outfits, and OOTD data \nto the server' }
      ]
    },
    {
      name: 'Premium',
      monthlyPrice: 225,
      annualPrice: 1350,
      discount: 50,
      features: [
        { text: 'Register up to Unlimited clothes' },
        { text: 'Advanced outfit planning' },
        { text: 'Priority customer support' },
        { text: 'Exclusive features access' }
      ]
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
      <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
          <View className="p-4">

          <View className="flex-row items-center mb-6">
            <TouchableOpacity
              onPress={() => router.back()}
              className="p-2 -ml-2"
            >
              <ArrowLeft size={24} color="#000" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold ml-2">Subscription</Text>
          </View>

            {plans.map((plan) => (
              <PlanCard
                key={plan.name}
                {...plan}
                isSelected={selectedPlan === plan.name}
                onSelect={() => setSelectedPlan(plan.name)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
        
    </>
    
  )
}

