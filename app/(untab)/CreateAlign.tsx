import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const App = () => {
  const [feeling, setFeeling] = useState("");

  const handleFeelingChange = (text: string) => {
    setFeeling(text);
  };

  const handleMakeItPositive = () => {
    console.log("Make it positive button pressed!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>It's okay to express your feelings here.</Text>
      <Text style={styles.subtitle}>No judgment, just understanding.</Text>

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Write what you're feeling or thinking right now..."
        onChangeText={handleFeelingChange}
        value={feeling}
      />

      <TouchableOpacity style={styles.button} onPress={handleMakeItPositive}>
        <Text style={styles.buttonText}>Make It Positive</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default App;
