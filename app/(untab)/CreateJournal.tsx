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
import useAddJournal from "../_hooks/_journalHooks/useAddJournal";
import useFetchJournal from "../_hooks/_journalHooks/useFetchJournal";

const CreateJournal = () => {
  const { refetch } = useFetchJournal();

  const { fields, setFields, isSubmiting, error, handleAddJournal } =
    useAddJournal(refetch);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.saveButton} onPress={handleAddJournal}>
          Save
        </Text>
      </View>

      {/* Date */}
      <Text style={styles.dateText}>SUN • 17 NOV 2024</Text>

      {/* Title */}
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        onChangeText={(text) => setFields({ ...fields, title: text })}
      />

      {/* Content */}
      <TextInput
        style={styles.contentInput}
        placeholder="Start writing..."
        multiline
        onChangeText={(text) => setFields({ ...fields, content: text })}
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
