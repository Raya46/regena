import CustomTabBar from "@/_components/CustomTabBar";
import { Tabs } from "expo-router";
import React from "react";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    />
  );
}
