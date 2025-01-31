import { Journal } from "@/_constant/JournalType";
import { format, parseISO, isValid } from "date-fns";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface JournalCardProps {
  item: Journal;
}

const JournalCard: React.FC<JournalCardProps> = ({ item }) => {
  // Fungsi format tanggal yang lebih robust
  const formatDate = (dateString?: string) => {
    // Jika tidak ada tanggal, gunakan tanggal saat ini
    const dateToFormat = dateString || new Date().toISOString();

    try {
      const parsedDate = parseISO(dateToFormat);

      // Tambahkan pengecekan isValid
      if (!isValid(parsedDate)) {
        return {
          date: "Unknown Date",
          time: "",
        };
      }

      return {
        date: format(parsedDate, "dd EEE yyyy"),
        time: format(parsedDate, "HH:mm"),
      };
    } catch (error) {
      console.error("Error formatting date:", error);
      return {
        date: "Invalid Date",
        time: "",
      };
    }
  };

  const { date, time } = formatDate(item.created_at);

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
            createdAt: item.created_at || new Date().toISOString(), // Fallback ke tanggal saat ini
          },
        })
      }
    >
      <View style={styles.journalHeader}>
        <Text style={styles.dateText2}>{date}</Text>
        <Text style={styles.dateText2}>{time}</Text>
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
