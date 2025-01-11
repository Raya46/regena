import { router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const useLogin = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const saveToken = async (token: string) => {
    await AsyncStorage.setItem("token", token);
  };

  const login = async (url: any, page: any) => {
    try {
      const response = await axios.post(url, fields);
      const token = response.data.token;
      await saveToken(token);

      setFields({
        email: "",
        password: "",
      });
      router.replace({ pathname: page, params: { email: fields.email } });
    } catch (error) {
      console.log(error);
    }
  };

  return { fields, setFields, login };
};
