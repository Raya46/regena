import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: "#111827",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        Profile
      </Text>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/bf60/a600/2fcdddd85ac09a631407eb988422dc38?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMDTIS3tE0OR~Ziy3O3xMbO2L6ijLoRxzaLe8yMpPRh-9EyaP-h5IPzQRghQYy2IS8DDbyd0WZYIshSrDTUTPfSkeHiqj6rQnecpmOAwOzhbJRCiEKWhVvpcmeEX13~Eqyt8pU1gbhbrynqzwrO6P8KJXlb25tv6XyoZ5rsfXoYw9I0PQ15qE6trZrVpUvS61FikaGijszL8fYNIW4QGQ4xqF7QY9kNkQ6vm0q2ndiJfEhTA1skjeP2gtajNzl1xbXz7T0YAeq8N-VDBgsU6Q0244~o2MTPx95y63dtpk82A67eHPVTet2II-XfXi6NqKh4wADPvbkpuxNhdvDjAxA__",
            }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editText}>✏️</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Patricia Rodrigues</Text>
        <Text style={styles.profileEmail}>pcrog@gmail.com</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.iconPlaceholder}>{item.icon}</View>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const menuItems = [
  {
    label: "Account Settings",
    icon: <Ionicons name="person-outline" color="#14B8A6" size={14} />,
  },
  {
    label: "Manage Notifications",
    icon: <Ionicons name="notifications-outline" color="#14B8A6" size={14} />,
  },
  {
    label: "Saved Recipes",
    icon: <Ionicons name="receipt-outline" color="#14B8A6" size={14} />,
  },
  {
    label: "Report a Problem",
    icon: <Ionicons name="warning-outline" color="#14B8A6" size={14} />,
  },
  {
    label: "Privacy & Security",
    icon: <Ionicons name="lock-closed-outline" color="#14B8A6" size={14} />,
  },
  {
    label: "Help Center",
    icon: <Ionicons name="headset-outline" color="#14B8A6" size={14} />,
  },
  {
    label: "Log Out",
    icon: (
      <Ionicons
        name="enter-outline"
        color="#EF4444"
        size={14}
        onPress={() => router.replace("/")}
      />
    ),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 5,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#e0f7fa",
    borderRadius: 50,
    padding: 5,
  },
  editText: {
    fontSize: 12,
    color: "#00796b",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  profileEmail: {
    fontSize: 16,
    color: "#777",
  },
  menuContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  iconPlaceholder: {
    marginRight: 15,
    fontSize: 20,
    backgroundColor: "#F0FDFA",
    padding: 10,
    borderRadius: 12,
  },
  menuText: {
    fontSize: 12,
    color: "#333",
  },
});

export default ProfilePage;
