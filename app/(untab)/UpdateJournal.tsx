import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useFetchJournal from "../_hooks/_journalHooks/useFetchJournal";
import useUpdateJournal from "../_hooks/_journalHooks/useUpdateJournal";

const UpdateJournal = () => {
  const { refetch } = useFetchJournal();
  const { id, title, content, createdAt } = useLocalSearchParams<{
    id: string;
    title: string;
    content: string;
    createdAt: string;
  }>();

  const { fields, setFields, isSubmiting, error, handleUpdateJournal } =
    useUpdateJournal(refetch);

  // Set initial values when component mounts
  useEffect(() => {
    setFields({
      title: title || "",
      content: content || "",
    });
  }, [title, content]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdateJournal(parseInt(id))}
          disabled={isSubmiting}
        >
          <Text style={styles.saveButton}>
            {isSubmiting ? "Saving..." : "Save"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Date */}
      <Text style={styles.dateText}>{createdAt}</Text>

      {/* Title */}
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={fields.title}
        onChangeText={(text) => setFields({ ...fields, title: text })}
      />

      {/* Content */}
      <TextInput
        style={styles.contentInput}
        placeholder="Start writing..."
        multiline
        value={fields.content}
        onChangeText={(text) => setFields({ ...fields, content: text })}
      />

      {/* Error Handling */}
      {error && <Text style={styles.errorText}>{error}</Text>}

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
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default UpdateJournal;
