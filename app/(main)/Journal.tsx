import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const JournalPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={{
          width: "100%",
          height: 100,
          flex: 2,
        }}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>How are you feeling today?</Text>
        <Text style={styles.subHeaderText}>
          It’s okay to feel however you’re feeling
        </Text>
      </View>

      {/* Date Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateSelector}
      >
        {["17 SUN", "18 MON", "19 TUE", "20 WED", "21 THU"].map(
          (date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateButton,
                index === 0 ? styles.selectedDateButton : null,
              ]}
            >
              <Text
                style={[
                  styles.dateText,
                  index === 0 ? styles.selectedDateText : null,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      {/* Journal Input */}
      <View style={{ flex: 3, paddingHorizontal: 20, marginTop: 12 }}>
        <TouchableOpacity
          style={styles.journalInput}
          onPress={() => router.push("/CreateJournal")}
        >
          <Text style={styles.journalText}>
            Tell us what’s on your mind today. Writing it down helps guide you
            toward healing.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 20,
    flex: 0,
  },
  dateButton: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#F0FDFA",
    marginHorizontal: 5,
  },
  selectedDateButton: {
    backgroundColor: "#14B8A6",
  },
  dateText: {
    color: "#555",
    fontWeight: "bold",
  },
  selectedDateText: {
    color: "#FFF",
  },
  journalInput: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  journalText: {
    color: "#888",
    fontSize: 16,
  },
});

export default JournalPage;
