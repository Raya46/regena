import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

// Definisikan interface untuk fields
interface JournalFields {
  title: string;
  content: string;
}

export default function useUpdateJournal(onSuccess: () => void) {
  const [fields, setFields] = useState<JournalFields>({
    title: "",
    content: "",
  });
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateJournal = async (id: number | string) => {
    setIsSubmiting(true);
    setError(null);
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.put(`${API}/journals/${id}`, fields, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onSuccess();
    } catch (error) {
      setError("Error updating journal");
      console.error(error);
    } finally {
      setIsSubmiting(false);
    }
  };

  return {
    fields,
    setFields,
    isSubmiting,
    error,
    handleUpdateJournal,
  };
}
