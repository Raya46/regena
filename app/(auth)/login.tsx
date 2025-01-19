import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useSave } from "@/_hooks/_authHooks/useSave";
import { useLogin } from "@/_hooks/_authHooks/useLogin";
import SVGTopBar from "@/_components/gradientTopBarSVG";
import { useGoogleAuth } from "@/_hooks/_authHooks/useGoogleAuth";
import Loading from "@/_components/Loading";

export default function LoginScreen() {
  const { saveToLocal } = useSave();
  const { login, fieldsLogin, setFieldsLogin, isSubmiting } =
    useLogin(saveToLocal);
  const { continueWithGoogle } = useGoogleAuth(saveToLocal);
  return (
    <View style={styles.container}>
      <SVGTopBar />
      <View style={{ flex: 5, justifyContent: "center" }}>
        <Text style={styles.title}>Sign in to your Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#9CA3AF"
          onChangeText={(text) =>
            setFieldsLogin({ ...fieldsLogin, email: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#9CA3AF"
          onChangeText={(text) =>
            setFieldsLogin({ ...fieldsLogin, password: text })
          }
        />
        <View style={styles.row}>
          <TouchableOpacity>
            <Text>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {isSubmiting ? (
          <Loading />
        ) : (
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.orText}>Or</Text>
        {/* <GoogleButton /> */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={continueWithGoogle}
        >
          <Ionicons name="logo-google" size={16} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          flex: 1,
          marginBottom: 20,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.linkText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  button: {
    backgroundColor: "#14B8A6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#AAAAAA",
  },
  googleButton: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  googleButtonText: {
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
    marginBottom: 23,
  },
  linkText: {
    color: "#00A86B",
    fontWeight: "bold",
  },
});
