import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import Loading from "./Loading";

export interface AlignValue {
  id: string;
  title: string;
  content: string;
  notification: boolean;
}

const AlignCard = ({
  item,
  updateAlign,
  iconColor,
  isSubmiting,
}: {
  item: AlignValue;
  updateAlign: () => void;
  iconColor: string;
  isSubmiting: boolean;
}) => {
  const handleUpdateAlign = useCallback(() => {
    updateAlign();
  }, [updateAlign]);
  return (
    <View style={styles.card}>
      <Text style={styles.negativeText}>{item.title}</Text>
      {isSubmiting ? (
        <Loading />
      ) : (
        <View style={styles.positiveContainer}>
          <Ionicons
            name="happy-outline"
            size={24}
            color="#FFD700"
            style={styles.icon}
          />
          <Text style={styles.positiveText}>{item.content}</Text>
          <TouchableOpacity onPress={handleUpdateAlign}>
            <Ionicons
              name="notifications-outline"
              size={20}
              color={iconColor}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
      )}
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
