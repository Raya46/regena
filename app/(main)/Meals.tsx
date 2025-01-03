import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const MealsPage = () => {
  const meals = [
    {
      id: "1",
      category: "Breakfast",
      title: "Gentle Oats with Honey and Berries",
      description: "A soft and nourishing way to start the day",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      category: "Lunch",
      title: "Grilled Chicken Salad",
      description: "A balanced meal with fresh greens and lean protein",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      category: "Snack",
      title: "Trail Mix with Dark Chocolate",
      description: "A snack to fuel you through the day",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      category: "Dinner",
      title: "Cozy Sweet Potato Curry",
      description: "A creamy, warm dish for relaxing evenings",
      image: "https://via.placeholder.com/150",
    },
  ];

  const renderMealItem = ({ item }: any) => (
    <View style={styles.cardContainer}>
      <View
        style={{
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          backgroundColor: "#E0F2FE",
          padding: 12,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>BreakFast</Text>
      </View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/DetailMeals")}
      >
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="bookmark-outline" size={24} color="#888" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Meals Made for You</Text>
        <Text style={styles.subtitle}>
          Enjoy meals to help rebuild your strength and confidence.
        </Text>
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
          <View style={styles.blurOverlay}>
            <Text style={styles.featuredTitle}>
              Energizing Morning Smoothie
            </Text>
            <Text style={styles.featuredDescription}>
              A refreshing smoothie to kickstart your day with natural energy.
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More →</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Meal List */}
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    paddingHorizontal: 20,
    paddingTop: 20,
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
    fontSize: 14,
    color: "#7A7A7A",
    marginTop: 5,
  },
  featuredCard: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  featuredImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  blurOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
    paddingBottom: 100,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 15,
    padding: 12,
    elevation: 2,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  cardDescription: {
    fontSize: 12,
    color: "#7A7A7A",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "column",
  },
});

export default MealsPage;
