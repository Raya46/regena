import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SVGTopBar from "../_components/gradientTopBarSVG";
import { useGoogleAuth } from "../_hooks/_authHooks/useGoogleAuth";
import { useRegister } from "../_hooks/_authHooks/useRegister";
import { useSave } from "../_hooks/_authHooks/useSave";
import Loading from "../_components/Loading";

export default function RegisterScreen() {
  const { saveToLocal } = useSave();
  const { register, isSubmiting, error, fieldsRegister, setFieldsRegister } =
    useRegister(saveToLocal);
  const { continueWithGoogle } = useGoogleAuth(saveToLocal);
  const [date, setDate] = useState<Date | null>(null);
  const [picker, setPicker] = useState(false);
  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      const currentDate = selectedDate;
      setDate(currentDate);

      const formattedDate = format(currentDate, "dd/MM/yyyy");

      setFieldsRegister({
        ...fieldsRegister,
        dateOfBirth: formattedDate,
      });

      setPicker(false);
    } else {
      setPicker(false);
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SVGTopBar />

      <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        <Ionicons
          name="arrow-back"
          size={20}
          onPress={() => router.replace("/login")}
          style={{ zIndex: 999, position: "relative" }}
        />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Register</Text>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 12,
            color: "#6B7280",
            marginVertical: 12,
          }}
        >
          Create an account to continue!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#9CA3AF"
          onChangeText={(text) =>
            setFieldsRegister({ ...fieldsRegister, firstName: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#9CA3AF"
          onChangeText={(text) =>
            setFieldsRegister({ ...fieldsRegister, lastName: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          onChangeText={(text) =>
            setFieldsRegister({ ...fieldsRegister, email: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#9CA3AF"
          onFocus={() => setPicker(true)}
          value={date ? format(date, "dd/MM/yyyy") : ""}
          editable={!picker}
        />
        {picker && (
          <DateTimePicker
            mode="date"
            value={date || new Date()}
            onChange={handleDateChange}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="phoneNumber"
          placeholderTextColor="#9CA3AF"
          onChangeText={(text) =>
            setFieldsRegister({ ...fieldsRegister, phoneNumber: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#9CA3AF"
          onChangeText={(text) =>
            setFieldsRegister({ ...fieldsRegister, password: text })
          }
        />
        {isSubmiting ? (
          <Loading />
        ) : (
          <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.orText}>Or</Text>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={continueWithGoogle}
        >
          <Ionicons name="logo-google" size={16} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/login")}>
            <Text style={styles.linkText}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 42,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  button: {
    backgroundColor: "#14B8A6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  linkText: {
    color: "#00A86B",
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
});
