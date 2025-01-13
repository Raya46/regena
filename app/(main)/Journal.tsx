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
import useFetchJournal from "../_hooks/_journalHooks/useFetchJournal";

const JournalPage = () => {
  const { journals, isLoading, error } = useFetchJournal();
  return (
    <View style={styles.container}>
      {/* Header */}
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/fc27/a3a5/26b969b0a4bbce94efdb3f9f0d4eb42d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOyUoM76HLmW3mVO7S-e0R0zVSzPYLiCp0Trydq6Sd2l~CentA~eDeuZ7aeNUwfcYcsCO3rT5WeGr-8hYTa2AgvtpxRPijFQiu0-874jI2l8QSZdu6E2GDR7LBD0lb2JtTbgeAVRem0QyBPEDXPHZ~NZsvOp0Zoat30fnZtp3WM2mDsaWVQSgnTvWI5ves0jyfq5gw00pNX2LRID4Rl0066DfydTW-rAxDX-lYcpF3~eu4JW~Ng~gtkHxu0VjzSwqcmFo9NQKgjG6JDo~6XgsPUbg2rLGvlkCttxwPNAJ60bLY6y0BUax3ylqSPAI0x50LifZI2orYH9BYafDvVyrQ__",
        }}
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
        <TouchableOpacity style={styles.dateButton}>
          <Text style={[styles.dateText, styles.tanggalBold]}>17</Text>
          <Text style={styles.dateText}>SUN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dateButton, styles.selectedDateButton]}
        >
          <Text style={[styles.selectedDateText, styles.tanggalBold]}>18</Text>
          <Text style={[styles.selectedDateText]}>MON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={[styles.dateText, styles.tanggalBold]}>19</Text>
          <Text style={styles.dateText}>TUE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={[styles.dateText, styles.tanggalBold]}>20</Text>
          <Text style={styles.dateText}>WED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={[styles.dateText, styles.tanggalBold]}>21</Text>
          <Text style={styles.dateText}>THU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={[styles.dateText, styles.tanggalBold]}>22</Text>
          <Text style={styles.dateText}>FRI</Text>
        </TouchableOpacity>
      </ScrollView>

      {journals ? (
        <View>
          <Text>list journal</Text>
        </View>
      ) : (
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
      )}
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
    padding: 12,
    borderRadius: 50,
    backgroundColor: "#F0FDFA",
    marginHorizontal: 5,
    justifyContent: "center",
    gap: 6,
    width: 60,
    height: 80,
  },
  selectedDateButton: {
    backgroundColor: "#14B8A6",
  },
  dateText: {
    color: "#555",
    textAlign: "center",
  },
  selectedDateText: {
    color: "#FFF",
    textAlign: "center",
  },
  tanggalBold: {
    fontWeight: "bold",
    fontSize: 20,
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
