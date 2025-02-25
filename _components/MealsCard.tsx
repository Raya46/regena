import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface MealsCardProps {
  item: {
    id: string;
    category: string;
    title: string;
    description: string;
    bgColor: string;
    detailMeals: string;
    icon: string;
    image: string;
    recipe: {
      ingredients: string[];
      steps: string[];
    };
  };
}

const MealsCard = ({ item }: MealsCardProps) => {
  return (
    <View
      style={{
        borderRadius: 12,
        backgroundColor: item.bgColor,
        flexDirection: "column",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignContent: "center",
          padding: 12,
        }}
      >
        <Ionicons name={item.icon} size={16} />
        <Text style={{ fontWeight: "bold" }}>{item.category}</Text>
      </View>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/DetailMeals",
            params: {
              ...item,
              recipe: JSON.stringify(item.recipe),
            },
          })
        }
      >
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="bookmark-outline" size={24} color="#888" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    elevation: 2,
  },
  cardImage: {
    width: 102,
    height: 114,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Lato",
  },
  cardDescription: {
    fontSize: 12,
    color: "#7A7A7A",
    fontFamily: "Lato",
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

export default MealsCard;
