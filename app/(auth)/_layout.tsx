import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function OnboardingLayout() {
  return (
    <Stack>
      <StatusBar hidden={true} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Register" options={{ headerShown: false }} />
    </Stack>
  );
}
