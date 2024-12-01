import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Card, CardHeader, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Link, Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { InputPassword } from "~/components/ui/pasword-input";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (

    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text className="text-2xl font-bold text-center">Login</Text>
      <Text className="text-muted-foreground text-center">
        Please sign in to continue
      </Text>

      <View className="space-y-2 w-full">
        <Text className="text-sm text-muted-foreground">Email</Text>
        <Input
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="space-y-2 w-full">
        <Text className="text-sm text-muted-foreground">Password</Text>
        <InputPassword
          passwordVisible={
            passwordVisible
          }
          onToggleVisibility={
            togglePasswordVisibility
          }
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
        />

      </View>

      <Button className="w-full" variant="default">
        <Text className="text-white">Sign In</Text>
      </Button>

      <Text className="text-center text-muted-foreground">or</Text>

      <Button className="w-full" variant="outline" onPress={handleGoogleLogin}>
        <Text>Sign In with Google</Text>
      </Button>

      <Button className="w-full" variant="outline" onPress={handleFacebookLogin}>
        <Text>Sign In with Facebook</Text>
      </Button>

      <View className="flex-row justify-center gap-1">
        <Text className="text-muted-foreground">Don't have an account?</Text>
        <Link href="/sign-up" className="text-sky-600">
          Sign up
        </Link>
      </View>
    </View>

  );
}