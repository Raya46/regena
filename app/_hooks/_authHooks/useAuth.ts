import { router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Linking from "expo-linking";

export const useAuth = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [fieldsRegister, setFieldsRegister] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    dateOfBirth: null,
    phoneNumber: "",
    password: "",
  });

  const saveToken = async (token: string, username: string, email: string) => {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("email", email);
  };

  const login = async (url: any, page: any) => {
    try {
      const response = await axios.post(url, fields);
      const token = response.data.token;
      const username = response.data.user.username;
      const email = response.data.user.email;
      await saveToken(token, username, email);

      setFields({
        email: "",
        password: "",
      });
      router.replace({ pathname: page, params: { email: fields.email } });
    } catch (error) {
      console.log(error);
    }
  };

  const continueWithGoogle = async (url: string) => {
    Linking.openURL(url);
    Linking.addEventListener("url", (event) => {
      const parsed = new URL(event.url); // URL yang diterima setelah redirect
      const token = parsed.searchParams.get("token");
      const username = parsed.searchParams.get("username");
      const email = parsed.searchParams.get("email");

      if (token && username && email) {
        saveToken(token, username, email);
        router.replace("/Home");
      }
    });
  };

  const logout = async (url: string, page: any) => {
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.post(
        url,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await AsyncStorage.multiRemove(["token", "username", "email"]);
      router.replace({ pathname: page });
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (url: string, page: any) => {
    try {
      const usernameFromField = `${fieldsRegister.firstName} ${fieldsRegister.lastName}`;
      const registrationData = {
        username: usernameFromField,
        email: fieldsRegister.email,
        date_of_birth: fieldsRegister.dateOfBirth,
        phone_number: fieldsRegister.phoneNumber,
        password: fieldsRegister.password,
      };
      const response = await axios.post(url, registrationData);
      const token = response.data.token;
      const username = response.data.user.username;
      const email = response.data.user.email;
      await saveToken(token, username, email);
      setFieldsRegister({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        dateOfBirth: null,
        phoneNumber: "",
        password: "",
      });
      router.replace({ pathname: page });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fields,
    setFields,
    fieldsRegister,
    setFieldsRegister,
    login,
    continueWithGoogle,
    logout,
    register,
  };
};
