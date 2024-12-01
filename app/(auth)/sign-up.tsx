import { View } from 'react-native';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { Input } from '~/components/ui/input';
import { Link, Stack } from 'expo-router';
import { InputPassword } from '~/components/ui/pasword-input';

export default function SignUp() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
      
    const handleGoogleSignUp = () => {
        // Handle Google sign-up logic here
    };

    const handleFacebookSignUp = () => {
        // Handle Facebook sign-up logic here
    };

    return (
        <>
            {/* <Stack.Screen options={{
                headerShown: false
            }} /> */}
            <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
                <Text className="text-2xl font-bold text-center">Sign Up</Text>
                <Text className="text-muted-foreground text-center">
                    Create an account to continue
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
                    <Text className="text-white">Sign Up</Text>
                </Button>

                <Text className="text-center text-muted-foreground">or</Text>

                <Button className="w-full" variant="outline" onPress={handleGoogleSignUp}>
                    <Text>Sign Up with Google</Text>
                </Button>

                <Button className="w-full" variant="outline" onPress={handleFacebookSignUp}>
                    <Text>Sign Up with Facebook</Text>
                </Button>

                <View className="flex-row justify-center gap-1">
                    <Text className="text-muted-foreground">Already have an account?</Text>
                    <Link href="/login" className="text-sky-600">
                        Login
                    </Link>
                </View>
            </View>
        </>

    );
}