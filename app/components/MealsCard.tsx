import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const MealsCard = ({ item }: any) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          backgroundColor: item.bgColor,
          padding: 12,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.category}</Text>
      </View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push(item.detailMeals)}
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
    marginBottom: 15,
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
  },
  cardDescription: {
    fontSize: 12,
    color: "#7A7A7A",
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "column",
  },
});

export default MealsCard;
