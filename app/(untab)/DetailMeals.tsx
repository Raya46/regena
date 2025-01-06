import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const DetailMeals = () => {
  const recipe = {
    title: "Energizing Morning Smoothie",
    description:
      "A refreshing smoothie to kickstart your day with natural energy.",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
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

  const [ingredientsExpanded, setIngredientsExpanded] = useState(false);
  const [stepsExpanded, setStepsExpanded] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#000"
          onPress={() => router.back()}
        />
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

      {/* Ingredients Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => setIngredientsExpanded((prev) => !prev)}
        >
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Ionicons name="fast-food-outline" size={20} color="#000" />
            <Text style={styles.sectionTitle}>Ingredients</Text>
          </View>
          <Ionicons name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>
        {ingredientsExpanded && (
          <View style={styles.sectionContent}>
            {recipe.ingredients.map((ingredient, index) => (
              <Text key={index} style={styles.listItem}>
                • {ingredient}
              </Text>
            ))}
          </View>
        )}
      </View>

      {/* Steps Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => setStepsExpanded((prev) => !prev)}
        >
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Ionicons name="restaurant-outline" size={20} color="#000" />
            <Text style={styles.sectionTitle}>How to Make It</Text>
          </View>
          <Ionicons name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>
        {stepsExpanded && (
          <View style={styles.sectionContent}>
            {recipe.steps.map((step, index) => (
              <Text key={index} style={styles.listItem}>
                {index + 1}. {step}
              </Text>
            ))}
          </View>
        )}
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
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
  sectionContent: {
    marginLeft: 10,
    paddingTop: 12,
  },
  listItem: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
});

export default DetailMeals;
