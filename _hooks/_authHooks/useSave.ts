import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useSave = () => {
  const [dataLocal, setDataLocal] = useState({
    username: "",
    email: "",
  });
  const saveToLocal = async (
    token: string,
    username: string,
    email: string
  ) => {
    await AsyncStorage.multiSet([
      ["token", token],
      ["username", username],
      ["email", email],
    ]);
  };
  const getItemLocal = async () => {
    try {
      const result = await AsyncStorage.multiGet(["username", "email"]);

      // Konversi hasil menjadi objek
      const userData = result.reduce((acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      }, {} as { username?: string; email?: string });

      setDataLocal({ username: userData.username, email: userData.email });
    } catch (error) {
      console.error("Error getting user data:", error);
      return {};
    }
  };
  useEffect(() => {
    getItemLocal();
  }, []);
  return { saveToLocal, dataLocal };
};
