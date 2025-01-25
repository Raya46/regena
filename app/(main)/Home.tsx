import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { meals } from "@/_constant/ListMeals";
import MealsCard from "@/_components/MealsCard";

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
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              maxWidth: "100%",
              maxHeight: "100%",
              width: 100,
              height: 10,
              backgroundColor: "#2DD4BF",
            },
          ]}
        >
          <Text style={styles.progressLabel}>1 Day</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "70%",
              height: 10,
              backgroundColor: "#22D3EE",
            },
          ]}
        >
          <Text style={styles.progressLabel}>18 Hours</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "30%",
              height: 10,
              backgroundColor: "#818CF8",
            },
          ]}
        >
          <Text style={styles.progressLabel}>17 Minutes</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "80%",
              height: 10,
              backgroundColor: "#A78BFA",
            },
          ]}
        >
          <Text style={styles.progressLabel}>48 Seconds</Text>
        </View>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
        {meals.map((value, index) => (
          <MealsCard item={value} key={index} />
        ))}
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
  progressBarContainer: {
    backgroundColor: "#0D9488",
    marginBottom: 10,
    borderRadius: 8,
  },
  listContainer: {
    paddingBottom: 24,
    gap: 12,
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
    fontFamily: "Lato",
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
    marginBottom: 15,
    fontFamily: "Lato",
  },
  progressBar: {
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#2DD4BF",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 50,
  },
  progressLabel: {
    color: "#ffffff",
    fontSize: 12,
    position: "absolute",
    left: 10,
    fontFamily: "Lato",
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
    fontFamily: "Lato",
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
    fontFamily: "Lato",
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
});

export default HomePage;
