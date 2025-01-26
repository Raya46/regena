import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

export default function useUpdateAlign(onSuccess: () => void) {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateAlign = async (id: string, valueNotification: boolean) => {
    setIsSubmiting(true);
    setError(null);
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.put(
        `${API}/aligns/${id}`,
        { notification: valueNotification },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      onSuccess();
    } catch (error) {
      setError("error updating");
    } finally {
      setIsSubmiting(false);
    }
  };
  return { isSubmiting, handleUpdateAlign };
}
