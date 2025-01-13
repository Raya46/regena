import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const OnboardingPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("/login");
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderIndicator = (currentStep: number) => {
    return [1, 2, 3].map((dot) => (
      <View
        key={dot}
        style={{
          backgroundColor: dot === currentStep ? "#14B8A6" : "#F1F5F9",
          padding: 5,
          borderRadius: 5,
          width: dot === currentStep ? 32 : undefined,
        }}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <View style={{ flex: 1 }}>
          {/* Image */}
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/617e/a04b/5dc599233da68f5ba7cfb4b69fe57535?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDvF3e0rfStc4qJKkmNap4YLW1haYlI0DZOrs1U8SbDBgchxBHK1L8CT4ft1O2ehF-qhyAOXifpg3BMN3NTSOOO~J9ZpN2l2ezZLvejBuy0ENhT2xKr0DWfA2LTGlwRb77uKaWLPPROKSjI5tnedWhjaYzhxmY35aLqaURklqYs6tacQb9m~lUVPCYhcF0nGUQfD-5jzLF~TIAUmicqAhK7TaK63ZWmw~ozD5QTMFMNlXQr7wdjYcd7CJnbZT044fzJeKmRq3U~3gBYwgyQsqz6GlVCXGcEqWIcDVBMVs~YFayloohq9-J-FrTKvZoDHhdyqBc5a-z1Qq~OdAoLwwg__",
            }}
            style={{ width: "100%", height: "100%", flex: 3 }}
          />

          {/* Content */}
          <View style={styles.contentContainer}>
            {/* Indicator */}
            <View style={styles.indicatorContainer}>
              {renderIndicator(step)}
            </View>

            {/* Text Content */}
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <View style={styles.titleContainer}>
                <Text style={styles.highlightText}>Regena</Text>
                <Text style={styles.normalText}>, your safe</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.normalText}>space </Text>
                <Text style={styles.highlightText}>for healing</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.normalText}>and </Text>
                <Text style={styles.highlightText}>growth</Text>
              </View>
            </View>

            {/* Navigation */}
            <View style={styles.navigationContainer}>
              <TouchableOpacity onPress={() => router.replace("/login")}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Ionicons name="arrow-forward" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {step === 2 && (
        <View style={{ flex: 1 }}>
          {/* Image */}
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/3889/ea36/ece839b525757ad1d479fe2a9d2bcdac?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adYktrtu8KO6TqWNnXiUYjTkSsONfeL1sYwTuKtls4e6882XyjauIRVh1IFOBbFKCJ8y8~fQiAJlIxoS6pYyOoDcJz922EJpOG2G6lslYwapAvZrM9BqpHDPWDFS3825lc5RdrgLuzLRdbJZPE0HCdi-fYJbIeIGK9nXrAVwrOoydm4NzsNrf0nB44BeUfHxtuqAYw22uPGgX0REtSxDHc-Gr2XUdhCjXlJoQc4wvJmJDhuMzDKY6SDq2BpnKYcZC1u-9C6t2rcGlntbN7EellFzaYvd2tL41pZ11Z54cQ81OdSEZS~6lWFWEsaD6Wsd7SsLLjIVrQ5Mbiewbhx23w__",
            }}
            style={{ width: 680, height: "100%", flex: 3, alignSelf: "center" }}
          />

          {/* Content */}
          <View style={styles.contentContainer}>
            {/* Indicator */}
            <View style={styles.indicatorContainer}>
              {renderIndicator(step)}
            </View>

            {/* Text Content */}
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <View style={styles.titleContainer}>
                <Text style={styles.highlightText}>Regena</Text>
                <Text style={styles.normalText}>, your safe</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.normalText}>space </Text>
                <Text style={styles.highlightText}>for healing</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.normalText}>and </Text>
                <Text style={styles.highlightText}>growth</Text>
              </View>
            </View>

            {/* Navigation */}
            <View style={styles.navigationContainer}>
              <TouchableOpacity onPress={() => router.replace("/login")}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Ionicons name="arrow-forward" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {step === 3 && (
        <View style={{ flex: 1 }}>
          {/* Image */}
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/c42f/a200/13645dbce0fe6938bac595d3a8be9cea?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M0s7axJtht7VKgUHUewYoj4gbuKTql49uilb50RDBRKRnn~j9-CZ0mgWGIdgc1soCJAFLLZsCuPO-hXU6LDYikhhY-24dXJ1zYBeAbw25YZ5sizEc0DzOjsvXom83R3Ms6ao8lgK5hAuLs1qTq1WWb0dV9PxEfRaP7u~wbfs7J2V~b5TBJqr2p5VXFVfNFAAD95Q1hrRXAsPqdSqkWn4PnuJ-IBjPEFlNoPQR0ZDqdqMEdbAF9MK7-pCZV0ezDxof~NuQvKfSXLmsQOIjQbS71C~aXC52Q4pOLF~SnpFPCJhJLAfFODHirjhccSISbugsIOTUh39MIDYVJbu2UPyHw__",
            }}
            style={{ width: "100%", height: "100%", flex: 3 }}
          />

          {/* Content */}
          <View style={styles.contentContainer}>
            {/* Indicator */}
            <View style={styles.indicatorContainer}>
              {renderIndicator(step)}
            </View>

            {/* Text Content */}
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <View style={styles.titleContainer}>
                <Text style={styles.highlightText}>Regena</Text>
                <Text style={styles.normalText}>, your safe</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.normalText}>space </Text>
                <Text style={styles.highlightText}>for healing</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.normalText}>and </Text>
                <Text style={styles.highlightText}>growth</Text>
              </View>
            </View>

            {/* Navigation */}
            <View style={styles.navigationContainer}>
              <TouchableOpacity onPress={() => router.replace("/login")}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Ionicons name="arrow-forward" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderCurve: "circular",
    backgroundColor: "#fff",
    position: "relative",
    flex: 2,
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginTop: -40, // Memotong sedikit di bawah image
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    paddingTop: 30,
  },
  textContainer: {
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  normalText: {
    fontSize: 32,
    fontWeight: "600",
  },
  highlightText: {
    color: "#14B8A6",
    fontSize: 32,
    fontWeight: "600",
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  skipText: {
    fontSize: 16,
    fontWeight: "500",
  },
  nextButton: {
    padding: 17,
    backgroundColor: "#14B8A6",
    borderRadius: 32,
  },
  stepContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  stepTitle: {
    fontSize: 24,
    marginVertical: 20,
  },
  stepButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default OnboardingPage;
