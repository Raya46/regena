import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import MealsCard from "../components/MealsCard";

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

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("progress");

  const renderResetSection = () => (
    <View style={styles.resetContainer}>
      <Text style={styles.resetText}>
        Every day is a new opportunity to grow.
      </Text>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => setActiveSection("reset")}
      >
        <Ionicons name="time-outline" size={30} style={{ color: "#fff" }} />
        <Text style={styles.resetButtonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );

  const renderProgressSection = () => (
    <View style={styles.progressContainer}>
      <Text style={styles.progressText}>
        I've been on my healing journey for...
      </Text>
      <View style={styles.progressBars}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#0D9488",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={[
              styles.progressBar,
              {
                width: "20%",
                backgroundColor: "#2DD4BF",
              },
            ]}
          >
            <Text style={styles.progressLabel}>1 Day</Text>
          </View>
          <View
            style={{
              backgroundColor: "#0D9488",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#0D9488",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={[
              styles.progressBar,
              {
                width: "70%",
                backgroundColor: "#22D3EE",
              },
            ]}
          >
            <Text style={styles.progressLabel}>18 Hours</Text>
          </View>
          <View
            style={{
              backgroundColor: "#0D9488",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#0D9488",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={[
              styles.progressBar,
              {
                width: "30%",
                backgroundColor: "#818CF8",
              },
            ]}
          >
            <Text style={styles.progressLabel}>17 Minutes</Text>
          </View>
          <View
            style={{
              backgroundColor: "#0D9488",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#0D9488",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={[
              styles.progressBar,
              {
                width: "80%",
                backgroundColor: "#A78BFA",
              },
            ]}
          >
            <Text style={styles.progressLabel}>48 Seconds</Text>
          </View>
          <View
            style={{
              backgroundColor: "#0D9488",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </View>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Ionicons
            name="happy-outline"
            size={24}
            style={{ alignSelf: "center", color: "#14B8A6" }}
          />
          <Text style={styles.headerText}>
            My body is worthy of love just as it is.{"\n"}I am beautiful in
            every shape and size.
          </Text>
        </View>

        <Swipeable
          renderRightActions={renderResetSection}
          overshootRight={false}
          onSwipeableOpen={() => setActiveSection("reset")}
          onSwipeableClose={() => setActiveSection("progress")}
        >
          {renderProgressSection()}
        </Swipeable>

        <View style={styles.indicatorContainer}>
          <View
            style={[
              styles.indicator,
              activeSection === "progress"
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
          <View
            style={[
              styles.indicator,
              activeSection === "reset"
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
        </View>

        <FlatList
          data={meals}
          renderItem={({ item }) => <MealsCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  listContainer: {
    paddingBottom: 24,
  },
  headerContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    color: "#14B8A6",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#00796B",
  },
  inactiveIndicator: {
    backgroundColor: "#B2B2B2",
  },
  progressContainer: {
    backgroundColor: "#E6FFFA",
    flex: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4A5568",
    marginBottom: 8,
  },
  progressBars: {
    marginTop: 8,
  },
  progressBar: {
    height: "100%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 8,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#2DD4BF",
  },
  progressLabel: {
    color: "#ffffff",
    fontSize: 12,
  },
  resetContainer: {
    backgroundColor: "#F0FFF4",
    padding: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginBottom: 24,
  },
  resetText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2F855A",
    textAlign: "center",
    marginBottom: 16,
  },
  resetButton: {
    backgroundColor: "#38B2AC",
    padding: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mealItem: {
    marginBottom: 16,
  },
  bgColor: {
    backgroundColor: "#FEF9C3",
  },
  mealCategory: {
    fontSize: 14,
    color: "black",
    backgroundColor: "#E0F2FE",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 8,
  },
  mealCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
  },
  mealImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  mealName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2D3748",
    marginBottom: 4,
    flex: 2,
  },
  mealDescription: {
    fontSize: 14,
    color: "#718096",
    flex: 2,
  },
});

export default HomePage;
