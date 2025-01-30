import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

export default function useAddAlign() {
  const [fields, setFields] = useState({
    id: "",
    title: "",
    content: "",
  });

  const [showContent, setShowContent] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddAlign = async () => {
    setIsSubmiting(true);
    setError(null);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.post(`${API}/aligns`, fields, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFields({
        ...fields,
        content: response.data.content,
        id: response.data.id,
      });
      setShowContent(true);
    } catch (error) {
      setError("something went wrong");
    } finally {
      setIsSubmiting(false);
    }
  };

  return {
    fields,
    setFields,
    isSubmiting,
    error,
    handleAddAlign,
    showContent,
  };
}
