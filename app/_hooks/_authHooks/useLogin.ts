import API from "@/_constant/API";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";

export const useLogin = (
  onSuccess: (token: string, username: string, email: string) => void
) => {
  const [fieldsLogin, setFieldsLogin] = useState({
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    setIsSubmiting(true);
    setError(null);
    try {
      const response = await axios.post(`${API}/login`, fieldsLogin);
      const token = response.data.token;
      const username = response.data.user.username;
      const email = response.data.user.email;
      onSuccess(token, username, email);

      setFieldsLogin({
        email: "",
        password: "",
      });
      router.replace({ pathname: "/Home" });
    } catch (error: any) {
      console.log(error);
      setError(error);
    } finally {
      setIsSubmiting(false);
    }
  };
  return { login, fieldsLogin, setFieldsLogin, isSubmiting, error };
};
