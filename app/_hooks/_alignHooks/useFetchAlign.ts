import API from "@/_constant/API";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetchAlign() {
  const [aligns, setAligns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddAlign = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API}/aligns`);
      const data = response.data.aligns;
      setAligns(data);
    } catch (error) {
      setError("someting went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleAddAlign();
  }, [handleAddAlign]);

  return { aligns, isLoading, error, refetch: handleAddAlign };
}
