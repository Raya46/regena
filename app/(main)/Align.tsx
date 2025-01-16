import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import useFetchAlign from "../_hooks/_alignHooks/useFetchAlign";
import Loading from "../_components/Loading";
import ErrorComp from "../_components/Error";
import AlignCard, { AlignValue } from "../_components/AlignCard";

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Align your thoughts</Text>
        <Text style={styles.subtitle}>
          Transform negative thoughts into positive affirmations
        </Text>
      </View>

      {/* Thought Cards */}
      {aligns ? (
        <FlatList
          data={aligns}
          renderItem={({ item }) => (
            <AlignCard
              item={item}
              iconColor={
                selectedIcons[`${item.id}_notification`] ? "#FF6347" : "#B0B0B0"
              }
              toggleIconColor={toggleIconColor(item.id, "notification")}
            />
          )}
          keyExtractor={(item: AlignValue) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View>
          <Text>no align</Text>
        </View>
      )}

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/CreateAlign")}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    paddingHorizontal: 20,
    paddingTop: 30,
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
  listContainer: {
    paddingBottom: 100,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 0,
    width: 60,
    height: 60,
    backgroundColor: "#00A398",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});

export default AlignPage;
