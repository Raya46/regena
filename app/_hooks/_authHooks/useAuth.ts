import { router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

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
    dateOfBirth: "",
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
    try {
      const response = await axios.get(url);
      const token = response.data.token;
      const username = response.data.googleUser.name;
      const email = response.data.googleUser.email;
      await saveToken(token, username, email);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (url: string, page: any) => {
    try {
      await axios.post(url);
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
        dateOfBirth: fieldsRegister.dateOfBirth,
        phoneNumber: fieldsRegister.phoneNumber,
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
        dateOfBirth: "",
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
