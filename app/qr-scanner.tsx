import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import { Flashlight, FlashlightOff } from "lucide-react-native";
import { Stack } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window"); // Screen dimensions
const SCANNER_SIZE = 280; // Scanning window size
const SCANNER_TOP = 100; // Distance of the scanner from the top
const SCANNER_LEFT = (width - SCANNER_SIZE) / 2; // Center scanner horizontally

export default function App() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState(false);

  const scanLinePosition = useSharedValue(0);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();

    scanLinePosition.value = withRepeat(
      withTiming(SCANNER_SIZE, { duration: 3000, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const handleBarcodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const animatedScanLineStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: scanLinePosition.value }],
    };
  });

  if (hasPermission === null) {
    return (
      <Text className="text-center p-4">Requesting camera permission</Text>
    );
  }
  if (hasPermission === false) {
    return <Text className="text-center p-4">No access to camera</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Scan QR",
          headerShown: true,
        }}
      />
      <View className="flex-1 bg-black relative">
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={StyleSheet.absoluteFillObject}
          // flash={flash ? "on" : "off"}
          enableTorch={flash}
        />

        {/* Overlay */}
        <View className="absolute inset-0">
          {/* Top Overlay */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: SCANNER_TOP,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          />

          {/* Bottom Overlay */}
          <View
            style={{
              position: "absolute",
              top: SCANNER_TOP + SCANNER_SIZE,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          />

          {/* Left Overlay */}
          <View
            style={{
              position: "absolute",
              top: SCANNER_TOP,
              bottom:height + 6.6 - (height - SCANNER_TOP - SCANNER_SIZE),
              left: 0,
              width: SCANNER_LEFT,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          />

          {/* Right Overlay */}
          <View
            style={{
              position: "absolute",
              top: SCANNER_TOP,
              bottom:height + 6.6 - (height - SCANNER_TOP - SCANNER_SIZE),
              right: 0,
              width: SCANNER_LEFT,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          />
        </View>

        {/* Scanning window */}
        <View
          style={{
            position: "absolute",
            top: SCANNER_TOP,
            left: SCANNER_LEFT,
            width: SCANNER_SIZE,
            height: SCANNER_SIZE,
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 8,
            }}
          />
          {/* Animated scan line */}
          <Animated.View
            style={[
              {
                position: "absolute",
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: "red",
              },
              animatedScanLineStyle,
            ]}
          />
        </View>

        {/* Flash toggle button */}
        <View className="absolute bottom-20 w-full flex items-center">
          <TouchableOpacity
            onPress={() => setFlash(!flash)}
            className="bg-white/20 p-4 rounded-full"
          >
            {flash ? (
              <Flashlight size={24} color="white" />
            ) : (
              <FlashlightOff size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>

        {/* Scan again button */}
        {scanned && (
          <TouchableOpacity
            className="absolute bottom-36 w-full items-center"
            onPress={() => setScanned(false)}
          >
            <View className="bg-white px-6 py-3 rounded-full">
              <Text className="text-black font-semibold">
                Tap to Scan Again
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
