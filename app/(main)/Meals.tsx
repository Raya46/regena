import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import MealsCard from "../_components/MealsCard";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { meals } from "../_constant/ListMeals";

const MealsPage = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>Meals Made for You</Text>
        <Text style={styles.subtitle}>
          Enjoy meals to help rebuild your strength and confidence.
        </Text>
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.categorySelect}>
          <Text>Select Category</Text>
          <Ionicons name="chevron-down" size={20} />
        </View>
        <View style={styles.generateButton}>
          <Text style={styles.generateText}>Generate</Text>
        </View>
      </View>

      {/* Featured Meal */}
      <View style={styles.featuredCard}>
        <ImageBackground
          source={{
            uri: "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
          }}
          style={styles.featuredImage}
          imageStyle={{ borderRadius: 12 }}
          resizeMode="cover"
        >
          <BlurView intensity={50} tint="dark" style={styles.blurOverlay}>
            <Text style={styles.featuredTitle}>
              Energizing Morning Smoothie
            </Text>
            <Text style={styles.featuredDescription}>
              A refreshing smoothie to kickstart your day with natural energy.
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More →</Text>
            </TouchableOpacity>
          </BlurView>
        </ImageBackground>
      </View>

      {/* Meal List */}
      <FlatList
        data={meals}
        renderItem={({ item }) => <MealsCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 12,
    color: "#7A7A7A",
    marginTop: 5,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 24,
  },
  categorySelect: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
    flex: 3,
  },
  generateButton: {
    backgroundColor: "#14B8A6",
    padding: 12,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
  },
  generateText: {
    color: "#fff",
    textAlign: "center",
  },
  featuredCard: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    maxWidth: "100%",
    alignItems: "center",
  },
  featuredImage: {
    width: 342,
    height: 300,
    justifyContent: "flex-end",
  },
  blurOverlay: {
    padding: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  featuredDescription: {
    fontSize: 14,
    color: "#E7E7E7",
    marginBottom: 10,
  },
  readMore: {
    fontSize: 14,
    color: "#FFD700",
    fontWeight: "bold",
  },
  listContainer: {
    gap: 12,
  },
});

export default MealsPage;
