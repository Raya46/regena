import { router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const useLogin = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const saveToken = async (token: string, username: string) => {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("username", username);
  };

  const login = async (url: any, page: any) => {
    try {
      const response = await axios.post(url, fields);
      const token = response.data.token;
      const username = response.data.user.username;
      await saveToken(token, username);

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
      await saveToken(token, username);
    } catch (error) {
      console.log(error);
    }
  };

  return { fields, setFields, login, continueWithGoogle };
};
