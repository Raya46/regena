import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

export default function useAddJournal(onSuccess: () => void) {
  const [fields, setFields] = useState({
    title: "",
    content: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddJournal = async () => {
    setIsSubmiting(true);
    setError(null);
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.post(`${API}/journals`, fields, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onSuccess();
    } catch (error) {
      setError("error add journal");
    } finally {
      setIsSubmiting(false);
    }
  };

  return {
    fields,
    setFields,
    isSubmiting,
    error,
    handleAddJournal,
  };
}
