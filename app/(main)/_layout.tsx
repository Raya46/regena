import React from "react";
import { Tabs } from "expo-router";
import CustomTabBar from "../_components/CustomTabBar";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    />
  );
}
