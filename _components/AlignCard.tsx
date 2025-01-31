import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Align } from "@/_constant/AlignType";

interface AlignCardProps {
  item: Align;
  iconColor: string;
  updateAlign: () => void;
}

const AlignCard: React.FC<AlignCardProps> = ({
  item,
  iconColor,
  updateAlign,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.negativeText}>{item.title}</Text>
      <View style={styles.positiveContainer}>
        <Ionicons
          name="happy-outline"
          size={24}
          color="#FFD700"
          style={styles.icon}
        />
        <Text style={styles.positiveText}>{item.content}</Text>
        <TouchableOpacity onPress={updateAlign}>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={iconColor}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlignCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  negativeText: {
    padding: 15,
    fontSize: 14,
    color: "#000",
  },
  positiveContainer: {
    backgroundColor: "#E7FAF8",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  positiveText: {
    flex: 1,
    fontSize: 14,
    color: "#00A398",
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  notificationIcon: {
    marginLeft: 10,
  },
});
