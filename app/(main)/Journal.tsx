import ErrorComp from "@/_components/Error";
import JournalCard from "@/_components/JournalCard";
import Loading from "@/_components/Loading";
import useFetchJournal from "@/_hooks/_journalHooks/useFetchJournal";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const JournalPage = () => {
  const { journals, isLoading, error, refetch } = useFetchJournal();

  const journalCards = useMemo(() => {
    return journals?.map((item) => <JournalCard item={item} key={item.id} />);
  }, [journals]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComp error={error} reload={refetch} />;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/fc27/a3a5/26b969b0a4bbce94efdb3f9f0d4eb42d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hj-SGD9b6N1sylb8OHf-QREzv5RIPKPFFewtCj34NKqeG~NZZhS4LsB9CyDLEEOYtDGMLw6PvSc3-ZsTbSphMV5k4PORQcBcLN~oSJii-HPoQlgJ4PuEKni5WK8Vg4JMeSMi3tcJQl70v7N0cDOAR--Dx0gfhJSHRNrha0ILaa3bdZobC6btBHUGeXBbNo0CqSGxPGY34zyIs5y01GAsE3goHwJKOKgbfsdzCkt~9MgrPkoqC60eNC1eXf2Ua3lSi4SGaxRLSJCo1zNfptMQGwRB9p82iuk6r8m9fqTe5h5mhEA~DTWC32Deeeh0OG5SEG4Kd2bLA5oimh4Wwq6pqw__",
          }}
          style={styles.headerImage}
        />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>How are you feeling today?</Text>
        <Text style={styles.subHeaderText}>
          It's okay to feel however you're feeling
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

      {/* Journal Content */}
      {journals.length == 0 ? (
        <View style={styles.emptyJournalContainer}>
          <TouchableOpacity
            style={styles.journalInput}
            onPress={() =>
              router.push({
                pathname: "/JournalAction",
                params: { mode: "create" },
              })
            }
          >
            <View style={styles.emptyJournalContent}>
              <Ionicons name="paper-plane-outline" size={24} color="#6B7280" />
              <Text style={styles.journalText}>
                Tell us what's on your mind today. Writing it down helps guide
                you toward healing.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.emptyJournalContainer}>
            <TouchableOpacity
              style={styles.journalInput}
              onPress={() =>
                router.push({
                  pathname: "/JournalAction",
                  params: { mode: "create" },
                })
              }
            >
              <View style={styles.emptyJournalContent}>
                <Ionicons
                  name="paper-plane-outline"
                  size={24}
                  color="#6B7280"
                />
                <Text style={styles.journalText}>
                  Tell us what's on your mind today. Writing it down helps guide
                  you toward healing.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {journalCards}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Pastikan gambar menutupi area dengan baik
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Lato",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
    fontFamily: "Lato",
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
    fontFamily: "Lato",
  },
  selectedDateText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato",
  },
  tanggalBold: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Lato",
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
    fontSize: 14,
    fontFamily: "Lato",
    width: 300,
  },
  emptyJournalContainer: {
    flex: 3,
    paddingHorizontal: 20,
    marginVertical: 12,
  },
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
    fontFamily: "Lato",
  },
  contentText: {
    fontSize: 14,
    color: "#6B7280",
    fontFamily: "Lato",
  },
  emptyJournalContent: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  listContainer: {
    paddingBottom: 100,
  },
});

export default JournalPage;
