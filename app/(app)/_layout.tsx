import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Slot, Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  React.useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("root layout", token);
      if (token) {
        router.replace("/Home");
      } else {
        router.replace("/");
      }
    };
    getToken();
  }, []);

  return <Slot />;
}
