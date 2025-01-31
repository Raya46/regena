import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";

// Definisikan props untuk komponen
interface JournalFormProps {
  mode: "create" | "update";
  initialTitle?: string;
  initialContent?: string;
  createdAt?: string;
  onSubmit: () => void;
  isSubmiting: boolean;
  fields: {
    title: string;
    content: string;
  };
  setFields: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
}

const JournalForm: React.FC<JournalFormProps> = ({
  mode,
  initialTitle = "",
  initialContent = "",
  createdAt,
  onSubmit,
  isSubmiting,
  fields,
  setFields,
}) => {
  const formatCreatedAt = () => {
    try {
      // Jika createdAt adalah string ISO, parse dengan parseISO
      return createdAt
        ? format(parseISO(createdAt), "dd MMMM yyyy, HH:mm")
        : format(new Date(), "dd MMMM yyyy, HH:mm");
    } catch (error) {
      console.error("Invalid date:", createdAt);
      return format(new Date(), "dd MMMM yyyy, HH:mm");
    }
  };
  useEffect(() => {
    if (mode === "update") {
      setFields({
        title: initialTitle,
        content: initialContent,
      });
    }
  }, [mode, initialTitle, initialContent]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit} disabled={isSubmiting}>
          <Text style={styles.saveButton}>
            {isSubmiting ? "Saving..." : "Save"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Date */}
      <Text style={styles.dateText}>{formatCreatedAt()}</Text>

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

export default JournalForm;
