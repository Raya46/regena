import AsyncStorage from "@react-native-async-storage/async-storage";

export const useSave = () => {
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
  return { saveToLocal };
};
