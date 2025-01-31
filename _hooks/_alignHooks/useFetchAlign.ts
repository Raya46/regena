import { Align } from "@/_constant/AlignType";
import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchAlign() {
  async function getAligns(): Promise<Align[]> {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get<Align[]>(`${API}/aligns`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  const {
    data: aligns = [],
    isLoading,
    error,
    refetch,
  } = useQuery<Align[]>({
    queryKey: ["aligns"],
    queryFn: getAligns,
  });

  return { aligns, isLoading, error, refetch };
}
