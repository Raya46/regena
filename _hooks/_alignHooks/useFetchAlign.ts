import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetchAlign() {
  const [aligns, setAligns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchAlign = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(`${API}/aligns`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      setAligns(data);
    } catch (error) {
      setError("someting went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchAlign();
  }, [handleFetchAlign]);

  return { aligns, isLoading, error, refetch: handleFetchAlign };
}
