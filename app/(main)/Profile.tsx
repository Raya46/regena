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
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }} // Ganti dengan URL atau sumber gambar Anda
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
  { label: "Account Settings", icon: "⚙️" },
  { label: "Manage Notifications", icon: "🔔" },
  { label: "Saved Recipes", icon: "📖" },
  { label: "Report a Problem", icon: "⚠️" },
  { label: "Privacy & Security", icon: "🔒" },
  { label: "Help Center", icon: "🎧" },
  { label: "Log Out", icon: "🚪" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7faff",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
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
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  iconPlaceholder: {
    marginRight: 15,
    fontSize: 20,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProfilePage;
