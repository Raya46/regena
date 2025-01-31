import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Align } from "@/_constant/AlignType";

export default function useUpdateAlign() {
  const queryClient = useQueryClient();

  const updateAlign = async (id: string, data: Partial<Align>) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.put<Align>(`${API}/aligns/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

  const updateAlignMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Align> }) =>
      updateAlign(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ["aligns"] });

      const previousAligns = queryClient.getQueryData<Align[]>(["aligns"]);

      queryClient.setQueryData<Align[]>(["aligns"], (old = []) =>
        old.map((align) => (align.id === id ? { ...align, ...data } : align))
      );

      return { previousAligns };
    },
    onError: (_, __, context) => {
      if (context?.previousAligns) {
        queryClient.setQueryData(["aligns"], context.previousAligns);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["aligns"] });
    },
  });

  return {
    updateAlign: updateAlignMutation.mutate,
    isUpdating: updateAlignMutation.isPending,
  };
}
