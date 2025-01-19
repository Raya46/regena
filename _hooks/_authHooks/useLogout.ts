import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const useLogout = () => {
  const logout = async () => {
    await AsyncStorage.multiRemove(["token", "username", "email"]);
    router.replace("/login");
  };
  return { logout };
};
