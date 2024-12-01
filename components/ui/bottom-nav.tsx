import { View, TouchableOpacity } from 'react-native';
import { Home, Heart, Menu, ShoppingBag, User } from 'lucide-react-native';

export function BottomNav() {
  return (
    <View className="flex-row items-center justify-between px-6 py-4 bg-white border-t border-gray-200">
      <TouchableOpacity>
        <Home className="text-blue-600" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Heart className="text-gray-400" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Menu className="text-gray-400" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ShoppingBag className="text-gray-400" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <User className="text-gray-400" size={24} />
      </TouchableOpacity>
    </View>
  );
}