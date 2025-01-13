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

const CreateAlign = () => {
  const [feeling, setFeeling] = useState("");
  const [change, setChange] = useState(false);

  const handleFeelingChange = (text: string) => {
    setFeeling(text);
  };

  const handleMakeItPositive = () => {
    console.log("Make it positive button pressed!");
    setChange(!change);
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
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/9ed3/99df/37da175391f98c2066640cccd628f84a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGK55iEbCUb47bXt5kLXP7c8YjTK-ZdQjcdauTXmtO1gRUlCHpLyVUSp7HvHHM9C1cTsejcgzgGs1yi2BqK5LZrZBbh53u3xORpdy8u3pQq-sVTS5dMUa3Ym2s-aUNazQ5H02uJvA1gkW5z-rPqJfnObf4zNpIO8AyI0BEMZkomZ1n24aNnQME4fC2GrLMN5~CvEIKvYRJbxaxKuPw6a01snoL9~~Tvu06SKxWnC1pMEigHQglZsHte7H62qlbJnm79xnJUGU55sX5qEMwqPDSQZugH-ggSTeZex3cwNzxMrgRkRLgG~l2XJBprPxFUQbENQako2cBcm~ZSDCoJfMg__",
          }}
          style={styles.image}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Write what you're feeling or thinking right now..."
        onChangeText={handleFeelingChange}
        value={feeling}
      />
      <View style={{ flex: 3 }}></View>

      {change ? (
        <View style={{ flexDirection: "column", gap: 16 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleMakeItPositive}
          >
            <Text style={styles.buttonText}>Set as Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={() => router.back()}
          >
            <Text style={{ color: "#14B8A6" }}>Save for Later</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleMakeItPositive}>
          <Text style={styles.buttonText}>Make It Positive</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F1F5F9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
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
    padding: 20,
    marginBottom: 20,
    borderRadius: 24,
    backgroundColor: "#fff",
    color: "#D1D5DB",
    flex: 2,
  },
  button: {
    backgroundColor: "#14B8A6",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: "#14B8A6",
    backgroundColor: "transparent",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default CreateAlign;
