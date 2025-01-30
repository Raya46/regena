import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Align {
  id: string;
  notification: boolean;
}

export default function useUpdateAlign() {
  const queryClient = useQueryClient();

  const updateAlignMutation = useMutation({
    mutationFn: async ({
      id,
      notification,
    }: {
      id: string;
      notification: boolean;
    }) => {
      console.log(id, notification);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.put(
        `${API}/aligns/${id}`,
        { notification },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    },

    // Optimistic Update
    onMutate: async ({ id, notification }) => {
      await queryClient.cancelQueries({ queryKey: ["aligns"] });

      const previousAligns = queryClient.getQueryData(["aligns"]);

      // queryClient.setQueryData(["todos"], (old) => [...old, ]);

      // Optimistically update to new value
      queryClient.setQueryData(["aligns"], (old: Align[]) =>
        old.map((align) =>
          align.id === id ? { ...align, notification } : align
        )
      );

      // Return a context object with the snapshotted value
      return { previousAligns };
    },

    // Rollback on error
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["aligns"], context?.previousAligns);
    },

    // Always refetch after error or success
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["aligns"] });
    },
  });

  return {
    handleUpdateAlign: (id: string, currentNotification: boolean) =>
      updateAlignMutation.mutate({
        id,
        notification: currentNotification,
      }),
    isSubmiting: updateAlignMutation.isPending,
    error: updateAlignMutation.error,
  };
}
