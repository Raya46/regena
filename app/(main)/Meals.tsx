import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MealsCard from "../components/MealsCard";
import { Ionicons } from "@expo/vector-icons";

const MealsPage = () => {
  const meals = [
    {
      id: "1",
      category: "Breakfast",
      title: "Gentle Oats with Honey and Berries",
      description: "A soft and nourishing way to start the day",
      bgColor: "#E0F2FE",
      detailMeals: "/DetailMeals",
      image:
        "https://s3-alpha-sig.figma.com/img/b305/e5fe/6245a571312f360d18f30dbc0ab6255d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XdbjZAA5tJ3j9OnWkNGzC~9egbAhbe1bQxmE5VJUt0RpH80~u6nvGeDD4RXMlj26UhlKaVyZ6HkKAMO2mSG25YozSabIepokG6gRupMF~PV6Bfbybq-eipW--rbWWFIbgeMDSyEMaGBHosk62u8mU2gz3jbI2zSxcI6HEmaqL7Fk3i06b8i~hxi0es-gtZWwLPugcEy6cHuVBcm-WTlkWOn5JST71mDISF0OAoXk1ZJRciVMtX3R4nv8EmougzFVUCYCTI3MkZh6Pp-zyzQfYmc29Yw-a7eD~avsDjt5KTTBJEgXnYTrTV1mdHViKupwwcuZmxtJA8V~eVclL2sZnA__",
    },
    {
      id: "2",
      category: "Lunch",
      title: "Grilled Chicken Salad",
      description: "A balanced meal with fresh greens and lean protein",
      bgColor: "#FEF9C3",
      detailMeals: "/DetailMeals",
      image:
        "https://s3-alpha-sig.figma.com/img/b305/e5fe/6245a571312f360d18f30dbc0ab6255d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XdbjZAA5tJ3j9OnWkNGzC~9egbAhbe1bQxmE5VJUt0RpH80~u6nvGeDD4RXMlj26UhlKaVyZ6HkKAMO2mSG25YozSabIepokG6gRupMF~PV6Bfbybq-eipW--rbWWFIbgeMDSyEMaGBHosk62u8mU2gz3jbI2zSxcI6HEmaqL7Fk3i06b8i~hxi0es-gtZWwLPugcEy6cHuVBcm-WTlkWOn5JST71mDISF0OAoXk1ZJRciVMtX3R4nv8EmougzFVUCYCTI3MkZh6Pp-zyzQfYmc29Yw-a7eD~avsDjt5KTTBJEgXnYTrTV1mdHViKupwwcuZmxtJA8V~eVclL2sZnA__",
    },
    {
      id: "3",
      category: "Snack",
      title: "Trail Mix with Dark Chocolate",
      description: "A snack to fuel you through the day",
      bgColor: "#ECFCCB",
      detailMeals: "/DetailMeals",
      image:
        "https://s3-alpha-sig.figma.com/img/b305/e5fe/6245a571312f360d18f30dbc0ab6255d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XdbjZAA5tJ3j9OnWkNGzC~9egbAhbe1bQxmE5VJUt0RpH80~u6nvGeDD4RXMlj26UhlKaVyZ6HkKAMO2mSG25YozSabIepokG6gRupMF~PV6Bfbybq-eipW--rbWWFIbgeMDSyEMaGBHosk62u8mU2gz3jbI2zSxcI6HEmaqL7Fk3i06b8i~hxi0es-gtZWwLPugcEy6cHuVBcm-WTlkWOn5JST71mDISF0OAoXk1ZJRciVMtX3R4nv8EmougzFVUCYCTI3MkZh6Pp-zyzQfYmc29Yw-a7eD~avsDjt5KTTBJEgXnYTrTV1mdHViKupwwcuZmxtJA8V~eVclL2sZnA__",
    },
    {
      id: "4",
      category: "Dinner",
      title: "Cozy Sweet Potato Curry",
      description: "A creamy, warm dish for relaxing evenings",
      bgColor: "#E0E7FF",
      detailMeals: "/DetailMeals",
      image:
        "https://s3-alpha-sig.figma.com/img/b305/e5fe/6245a571312f360d18f30dbc0ab6255d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XdbjZAA5tJ3j9OnWkNGzC~9egbAhbe1bQxmE5VJUt0RpH80~u6nvGeDD4RXMlj26UhlKaVyZ6HkKAMO2mSG25YozSabIepokG6gRupMF~PV6Bfbybq-eipW--rbWWFIbgeMDSyEMaGBHosk62u8mU2gz3jbI2zSxcI6HEmaqL7Fk3i06b8i~hxi0es-gtZWwLPugcEy6cHuVBcm-WTlkWOn5JST71mDISF0OAoXk1ZJRciVMtX3R4nv8EmougzFVUCYCTI3MkZh6Pp-zyzQfYmc29Yw-a7eD~avsDjt5KTTBJEgXnYTrTV1mdHViKupwwcuZmxtJA8V~eVclL2sZnA__",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Meals Made for You</Text>
        <Text style={styles.subtitle}>
          Enjoy meals to help rebuild your strength and confidence.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderRadius: 10,
          marginBottom: 24,
        }}
      >
        <View style={{ flexDirection: "row", gap: 8, padding: 12, flex: 3 }}>
          <Text>Select Category</Text>
          <Ionicons name="chevron-down" size={20} />
        </View>
        <View
          style={{
            backgroundColor: "#14B8A6",
            padding: 12,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            flex: 1,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Generate</Text>
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
        renderItem={({ item }) => <MealsCard item={item} />}
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
});

export default MealsPage;
