import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
