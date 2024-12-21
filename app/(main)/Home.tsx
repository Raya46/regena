import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { router } from "expo-router";

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
          style={[
            styles.progressBar,
            { backgroundColor: "#38B2AC", width: "100%" },
          ]}
        >
          <Text style={styles.progressLabel}>1 Day</Text>
        </View>
        <View
          style={[
            styles.progressBar,
            { backgroundColor: "#4FD1C5", width: "80%" },
          ]}
        >
          <Text style={styles.progressLabel}>18 Hours</Text>
        </View>
        <View
          style={[
            styles.progressBar,
            { backgroundColor: "#81E6D9", width: "70%" },
          ]}
        >
          <Text style={styles.progressLabel}>17 Minutes</Text>
        </View>
        <View
          style={[
            styles.progressBar,
            { backgroundColor: "#B2F5EA", width: "50%" },
          ]}
        >
          <Text style={[styles.progressLabel, { color: "#234E52" }]}>
            48 Seconds
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
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

        <View style={styles.mealsContainer}>
          <Text style={styles.mealsTitle}>Meals</Text>

          <View style={styles.mealItem}>
            <Text style={styles.mealCategory}>🍳 Breakfast</Text>
            <View style={styles.mealCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.mealImage}
              />
              <Text style={styles.mealName}>
                Gentle Oats with Honey and Berries
              </Text>
              <Text style={styles.mealDescription}>
                A soft and nourishing way to start the day
              </Text>
            </View>
          </View>

          {/* Lunch */}
          <View style={styles.mealItem}>
            <Text style={styles.mealCategory}>🥗 Lunch</Text>
            <View style={styles.mealCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.mealImage}
              />
              <Text style={styles.mealName}>Grilled Chicken Salad</Text>
              <Text style={styles.mealDescription}>
                A balanced meal with fresh greens and lean protein
              </Text>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#22543D",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
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
    height: 16,
    borderRadius: 4,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  progressLabel: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
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
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mealsContainer: {
    marginBottom: 24,
  },
  mealsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
    marginBottom: 16,
  },
  mealItem: {
    marginBottom: 16,
  },
  mealCategory: {
    fontSize: 14,
    color: "#718096",
    marginBottom: 8,
  },
  mealCard: {
    backgroundColor: "#EDF2F7",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mealImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  mealName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2D3748",
    marginBottom: 4,
  },
  mealDescription: {
    fontSize: 14,
    color: "#718096",
  },
  logoutButton: {
    backgroundColor: "#E53E3E",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomePage;
