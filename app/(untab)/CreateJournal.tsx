import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const CreateJournal = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.saveButton}>Save</Text>
      </View>

      {/* Date */}
      <Text style={styles.dateText}>SUN • 17 NOV 2024</Text>

      {/* Title */}
      <TextInput style={styles.titleInput} placeholder="Title" />

      {/* Content */}
      <TextInput
        style={styles.contentInput}
        placeholder="Start writing..."
        multiline
        value="I didn’t eat lunch today. I just couldn’t bring myself to do it. I feel so disgusting when I think about food. The thought of gaining weight is terrifying. I feel like I’m trapped in this endless cycle of not being good enough."
      />

      {/* Microphone Button */}
      <View style={styles.micContainer}>
        <TouchableOpacity style={styles.micButton}>
          <Ionicons name="mic-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  saveButton: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#00A398",
    borderRadius: 10,
  },
  dateText: {
    marginTop: 20,
    fontSize: 14,
    color: "gray",
  },
  titleInput: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    borderBottomColor: "#ddd",
    paddingVertical: 5,
  },
  contentInput: {
    flex: 1,
    marginTop: 4,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: "top",
  },
  micContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  micButton: {
    width: 60,
    height: 60,
    backgroundColor: "#00A398",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateJournal;
