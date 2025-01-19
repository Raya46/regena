import API from "@/_constant/API";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";

export const useRegister = (
  onSuccess: (token: string, username: string, email: string) => void
) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldsRegister, setFieldsRegister] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    dateOfBirth: null,
    phoneNumber: "",
    password: "",
  });
  const register = async () => {
    setIsSubmiting(true);
    setError(null);
    try {
      const usernameFromField = `${fieldsRegister.firstName} ${fieldsRegister.lastName}`;
      const registrationData = {
        username: usernameFromField,
        email: fieldsRegister.email,
        date_of_birth: fieldsRegister.dateOfBirth,
        phone_number: fieldsRegister.phoneNumber,
        password: fieldsRegister.password,
      };
      const response = await axios.post(`${API}/register`, registrationData);
      const token = response.data.token;
      const username = response.data.user.username;
      const email = response.data.user.email;
      onSuccess(token, username, email);
      setFieldsRegister({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        dateOfBirth: null,
        phoneNumber: "",
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
  return { register, isSubmiting, fieldsRegister, setFieldsRegister, error };
};
