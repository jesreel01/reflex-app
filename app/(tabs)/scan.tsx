import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera";
import {
  ArrowLeft,
  Flashlight,
  FlashlightOff,
  ImageIcon,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
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

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-black relative">
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
        flash="on"
        
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}

      <View className="flex-row justify-between items-center px-4 pb-4 absolute top-16 w-full">
        <TouchableOpacity>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFlash(!flash)}>
          {flash ? (
            <Flashlight size={24} color="white" />
          ) : (
            <FlashlightOff size={24} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageIcon size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="absolute inset-0 flex items-center justify-center">
        <View className="w-72 h-72 border-2 border-white rounded-lg">
          <View className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
          <View className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
          <View className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
          <View className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
        </View>
      </View>
      {/* <View className="p-4 pb-8 absolute bottom-0 w-full">
        <TouchableOpacity
          className="bg-white rounded-full p-4 flex-row items-center justify-center space-x-2"
          onPress={() => setScanned(false)}
        >
          <Text className="text-black text-base font-medium">
            Show QR Code / Barcode
          </Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}
