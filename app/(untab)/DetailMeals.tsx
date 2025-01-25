import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useGlobalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";

const DetailMeals = () => {
  const params = useGlobalSearchParams();
  const [recipeData, setRecipeData] = useState<any>(null);

  useEffect(() => {
    if (params.recipe) {
      try {
        const parsed = JSON.parse(params.recipe as string);
        setRecipeData(parsed);
      } catch (error) {
        console.error("Error parsing recipe data:", error);
      }
    }
  }, [params.recipe]);

  const [ingredientsExpanded, setIngredientsExpanded] = useState(false);
  const [stepsExpanded, setStepsExpanded] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
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
            source={{ uri: params.image as string }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <BlurView intensity={50} tint="dark" style={styles.imageOverlay}>
          <Text style={styles.title}>{params.title as string}</Text>
          <Text style={styles.description}>{params.description as string}</Text>
        </BlurView>
      </View>
      <View style={{ paddingVertical: 12 }}></View>
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
        {ingredientsExpanded && recipeData && (
          <View style={styles.sectionContent}>
            {recipeData.ingredients.map((ingredient: string, index: number) => (
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
        {stepsExpanded && recipeData && (
          <View style={styles.sectionContent}>
            {recipeData.steps.map((step: string, index: number) => (
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
    fontFamily: "Lato",
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
    padding: 15,
    borderRadius: 30,
    maxWidth: "100%",
    width: 320,
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
    fontFamily: "Lato",
  },
  description: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Lato",
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
    fontFamily: "Lato",
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
