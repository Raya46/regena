import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export interface JournalValue {
  id: string;
  title: string;
  content: string;
  date: string;
}

const JournalCard = ({ item }: { item: JournalValue }) => {
  return (
    <TouchableOpacity
      style={styles.journalContainer}
      onPress={() =>
        router.push({
          pathname: "/JournalAction",
          params: {
            id: item.id,
            title: item.title,
            content: item.content,
            mode: "update",
          },
        })
      }
    >
      <View style={styles.journalHeader}>
        <Text style={styles.dateText2}>{item.date}</Text>
        <Text style={styles.dateText2}>{item.date}</Text>
      </View>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.contentText}>{item.content}</Text>
    </TouchableOpacity>
  );
};

export default JournalCard;

const styles = StyleSheet.create({
  journalContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 12,
    gap: 8,
  },
  journalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText2: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  titleText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "700",
  },
  contentText: {
    fontSize: 14,
    color: "#6B7280",
  },
});
