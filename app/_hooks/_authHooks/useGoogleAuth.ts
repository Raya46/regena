import API from "@/_constant/API";
import { router } from "expo-router";
import { Linking } from "react-native";

export const useGoogleAuth = (
  onSuccess: (token: string, username: string, email: string) => void
) => {
  const continueWithGoogle = async () => {
    try {
      await Linking.openURL(`${API}/auth/google`);

      const handleUrl = (event: { url: string }) => {
        try {
          const parsed = new URL(event.url);
          const token = parsed.searchParams.get("token");
          const username = parsed.searchParams.get("username");
          const email = parsed.searchParams.get("email");

          if (token && username && email) {
            onSuccess(token, username, email);
            router.replace("/Home");
          } else {
            throw new Error("Invalid Google Auth response");
          }
        } catch (error) {
          console.error("Google Auth error:", error);
        } finally {
          Linking.removeAllListeners("url");
        }
      };

      Linking.addEventListener("url", handleUrl);
    } catch (error) {
      console.error("Google Auth failed:", error);
    }
  };

  return { continueWithGoogle };
};
