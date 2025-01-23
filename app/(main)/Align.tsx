import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AlignCard from "@/_components/AlignCard";
import ErrorComp from "@/_components/Error";
import Loading from "@/_components/Loading";
import useFetchAlign from "@/_hooks/_alignHooks/useFetchAlign";

const AlignPage = () => {
  const { aligns, isLoading, error, refetch } = useFetchAlign();
  const [selectedIcons, setSelectedIcons] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleIconColor = (id: string, iconType: "notification") => {
    setSelectedIcons((prev) => ({
      ...prev,
      [`${id}_${iconType}`]: !prev[`${id}_${iconType}`],
    }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComp error={error} reload={refetch} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Align your thoughts</Text>
          <Text style={styles.subtitle}>
            Transform negative thoughts into positive affirmations
          </Text>
        </View>

        {/* Thought Cards */}
        {aligns ? (
          aligns.map((item, index) => (
            <AlignCard
              key={item.id}
              item={item}
              iconColor={
                selectedIcons[`${item.id}_notification`] ? "#FF6347" : "#B0B0B0"
              }
              toggleIconColor={() => toggleIconColor(item.id, "notification")}
            />
          ))
        ) : (
          <View style={styles.noAlignContainer}>
            <Text>No align available</Text>
          </View>
        )}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/CreateAlign")}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  scrollContentContainer: {
    paddingBottom: 100,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#7A7A7A",
    marginTop: 5,
  },
  noAlignContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: "#00A398",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default AlignPage;
