import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface ErrorCompProps {
  error: string | null;
  reload: () => void;
}

const ErrorComp: React.FC<ErrorCompProps> = ({ error, reload }) => {
  return (
    <View style={styles.errorContainer}>
      <Ionicons name="alert-circle-outline" size={50} color="#FF6347" />
      <Text style={styles.errorText}>Failed to load thoughts</Text>
      <Text style={styles.errorSubText}>{error?.toString()}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={reload}>
        <Text style={styles.retryButtonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorComp;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F9FF",
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 20,
    color: "#FF6347",
    marginTop: 15,
  },
  errorSubText: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
    textAlign: "center",
  },
  retryButton: {
    marginTop: 20,
    backgroundColor: "#00A398",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  retryButtonText: {
    color: "white",
    fontSize: 16,
  },
});
