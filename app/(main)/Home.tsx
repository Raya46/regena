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
import { Ionicons } from "@expo/vector-icons";

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

        <View style={styles.mealsContainer}>
          <View style={styles.mealItem}>
            <Text style={styles.mealCategory}>🍳 Breakfast</Text>
            <View style={styles.mealCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.mealImage}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text style={styles.mealName}>
                  Gentle Oats with Honey and Berries
                </Text>
                <Text style={styles.mealDescription}>
                  A soft and nourishing way to start the day
                </Text>
                <Ionicons
                  name="bookmark-outline"
                  size={24}
                  style={{
                    alignSelf: "flex-end",
                    color: "gray",
                    marginTop: 10,
                  }}
                />
              </View>
            </View>
          </View>

          {/* Lunch */}
          <View style={styles.mealItem}>
            <Text style={[styles.mealCategory, styles.bgColor]}>🥗 Lunch</Text>
            <View style={styles.mealCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.mealImage}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text style={styles.mealName}>
                  Gentle Oats with Honey and Berries
                </Text>
                <Text style={styles.mealDescription}>
                  A soft and nourishing way to start the day
                </Text>
                <Ionicons
                  name="bookmark-outline"
                  size={24}
                  style={{
                    alignSelf: "flex-end",
                    color: "gray",
                    marginTop: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
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
  mealsContainer: {
    marginBottom: 24,
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
