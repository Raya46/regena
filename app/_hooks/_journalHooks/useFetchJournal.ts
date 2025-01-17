import API from "@/_constant/API";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetchJournal() {
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchJournal = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API}/journals`);
      const data = response.data.journals;
      setJournals(data);
    } catch (error) {
      setError("someting went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchJournal();
  }, [handleFetchJournal]);

  return { journals, isLoading, error, refetch: handleFetchJournal };
}
