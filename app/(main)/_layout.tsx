import { Tabs } from "expo-router";
import React from "react";
import CustomTabBar from "../_components/CustomTabBar";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    />
  );
}
