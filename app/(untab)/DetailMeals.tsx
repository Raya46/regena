import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DetailMeals = () => {
  const recipe = {
    title: "Energizing Morning Smoothie",
    description:
      "A refreshing smoothie to kickstart your day with natural energy.",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "1 banana",
      "1 cup almond milk",
      "1 handful spinach",
      "1 tbsp peanut butter",
      "Ice cubes",
    ],
    steps: [
      "Combine all ingredients in a blender.",
      "Blend until smooth.",
      "Pour into a glass and enjoy!",
    ],
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Recipe Details</Text>
        <Ionicons name="bookmark-outline" size={24} color="#000" />
      </View>

      {/* Featured Image */}
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={{ uri: recipe.image }}
            style={styles.image}
            resizeMode="cover"
          ></ImageBackground>
        </View>
        <View style={styles.imageOverlay}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 10 }}></View>

      {/* Ingredients */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="fast-food-outline" size={20} color="#000" />
          <Text style={styles.sectionTitle}>Ingredients</Text>
        </View>
        <View style={styles.sectionContent}>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.listItem}>
              • {ingredient}
            </Text>
          ))}
        </View>
      </View>

      {/* Steps */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="restaurant-outline" size={20} color="#000" />
          <Text style={styles.sectionTitle}>How to Make It</Text>
        </View>
        <View style={styles.sectionContent}>
          {recipe.steps.map((step, index) => (
            <Text key={index} style={styles.listItem}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F5F9FF",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageWrapper: {
    width: "90%",
    height: 250,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 15,
    borderRadius: 12,
    width: "80%",
    position: "absolute",
    top: 190,
    zIndex: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#FFF",
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
  sectionContent: {
    marginLeft: 10,
  },
  listItem: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
});

export default DetailMeals;
