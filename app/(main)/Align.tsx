import React from "react";
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

const AlignPage = () => {
  const { aligns } = useFetchAlign();
  const thoughts = [
    {
      id: "1",
      negative: "I’m never good enough.",
      positive:
        "I am learning and growing every day, and I’m proud of my progress.",
    },
    {
      id: "2",
      negative: "I can’t control my eating habits.",
      positive:
        "I’m learning to nourish my body and take control one step at a time.",
    },
    {
      id: "3",
      negative: "I’m too fat. I need to lose weight to be worthy of love.",
      positive:
        "My body is worthy of love just as it is. I am beautiful in every shape and size.",
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.negativeText}>{item.negative}</Text>
      <View style={styles.positiveContainer}>
        <Ionicons
          name="happy-outline"
          size={24}
          color="#00A398"
          style={styles.icon}
        />
        <Text style={styles.positiveText}>{item.positive}</Text>
        <Ionicons
          name="notifications-outline"
          size={20}
          color="#B0B0B0"
          style={styles.notificationIcon}
        />
      </View>
    </View>
  );

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
          data={thoughts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
