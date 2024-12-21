import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

interface TabBarProps extends BottomTabBarProps {}

function getTabIcon(routeName: string): string {
  switch (routeName) {
    case "Home":
      return "home";
    case "Journal":
      return "book";
    case "Align":
      return "sync";
    case "Meals":
      return "restaurant";
    case "Profile":
      return "person";
    default:
      return "ellipse";
  }
}

function CustomTabBar({ state, descriptors, navigation }: TabBarProps) {
  const orderedRoutes = ["Home", "Journal", "Align", "Meals", "Profile"];

  const sortedRoutes = state.routes.sort(
    (a, b) => orderedRoutes.indexOf(a.name) - orderedRoutes.indexOf(b.name)
  );

  return (
    <View style={styles.tabBar}>
      {sortedRoutes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const iconName = getTabIcon(route.name);

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab, isFocused && styles.tabFocused]}
          >
            <Ionicons
              name={iconName}
              size={24}
              color={isFocused ? "#fff" : "#9E9E9E"}
            />
            <Text style={isFocused ? styles.labelFocused : styles.label}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#004D40",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabFocused: {
    backgroundColor: "#00796B",
  },
  label: {
    color: "#9E9E9E",
    fontSize: 12,
  },
  labelFocused: {
    color: "#fff",
    fontSize: 12,
  },
});

export default CustomTabBar;
