import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

const SVGTopBar = () => (
  <View style={styles.container}>
    <LinearGradient
      colors={["#2DD4BF", "#F5F5F5"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.7 }}
      style={styles.gradient}
    ></LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 275,
  },
  gradient: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 190,
  },
});

export default SVGTopBar;
