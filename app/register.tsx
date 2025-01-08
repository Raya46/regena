import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function RegisterScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingVertical: 20 }}>
        <Ionicons
          name="arrow-back"
          size={20}
          onPress={() => router.replace("/")}
        />
      </View>
      <View>
        <Text style={styles.title}>Register</Text>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 12,
            color: "#6B7280",
            marginVertical: 12,
          }}
        >
          Create an account to continue!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          placeholder="region"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/Home")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={16} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text style={styles.linkText}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 42,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  button: {
    backgroundColor: "#14B8A6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  linkText: {
    color: "#00A86B",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#AAAAAA",
  },
  googleButton: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  googleButtonText: {
    fontSize: 16,
  },
});
