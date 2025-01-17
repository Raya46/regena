import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  React.useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("root layout");
      if (token) {
        router.replace("/Home");
      } else {
        router.replace("/");
      }
    };
    getToken();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="(untab)" options={{ headerShown: false }} />
    </Stack>
  );
}
