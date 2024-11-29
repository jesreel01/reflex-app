import * as React from "react";
import { View } from "react-native";
import { Card, CardHeader, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
            <Input
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Button className="w-full" variant="default">
            <Text className="text-white">Sign In</Text>
          </Button>

          <View className="flex-row justify-center gap-1">
            <Text className="text-muted-foreground">Don't have an account?</Text>
            {/* <Link href="" className="text-sky-600">
              Sign up
            </Link> */}
          </View>
    </View>
  );
}