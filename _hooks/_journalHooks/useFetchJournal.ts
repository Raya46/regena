import API from "@/_constant/API";
import { Journal } from "@/_constant/JournalType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchJournal() {
  async function getJournals(): Promise<Journal[]> {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get<Journal[]>(`${API}/journals`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  const {
    data: journals = [],
    isLoading,
    error,
    refetch,
  } = useQuery<Journal[]>({
    queryKey: ["journals"],
    queryFn: getJournals,
  });

  return { journals, isLoading, error, refetch };
}
