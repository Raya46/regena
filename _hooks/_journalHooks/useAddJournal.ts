import API from "@/_constant/API";
import { Journal } from "@/_constant/JournalType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";

export default function useAddJournal() {
  const [fieldsCreate, setFieldsCreate] = useState({
    title: "",
    content: "",
  });
  const queryClient = useQueryClient();

  const handleAddJournal = async () => {
    try {
      console.log(fieldsCreate);
      if (!fieldsCreate.title.trim() || !fieldsCreate.content.trim()) {
        throw new Error("Title and content cannot be empty");
      }

      const token = await AsyncStorage.getItem("token");
      const response = await axios.post<Journal>(
        `${API}/journals`,
        fieldsCreate,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding journal", error);
      throw error;
    }
  };

  const createJournalMutation = useMutation({
    mutationFn: handleAddJournal,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["journals"] });
      const prev = queryClient.getQueryData<Journal[]>(["journals"]);
      const tempId = `temp-${Date.now()}`;
      const optimisticJournal: Journal = {
        id: tempId,
        title: fieldsCreate.title,
        content: fieldsCreate.content,
        created_at: new Date().toISOString(),
      };

      queryClient.setQueryData<Journal[]>(["journals"], (old = []) => [
        optimisticJournal,
        ...old,
      ]);

      // Return a context object with the snapshotted value
      return { prev, tempId };
    },
    onSuccess: (serverJournal, _, context) => {
      setFieldsCreate({ title: "", content: "" });

      // Navigate back
      router.back();
    },
    onError: (error, _, context) => {
      console.error("Mutation error", error);

      if (context?.prev) {
        queryClient.setQueryData(["journals"], context.prev);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["journals"] });
    },
  });

  return {
    fieldsCreate,
    setFieldsCreate,
    isSubmiting: createJournalMutation.isPending,
    createJournal: createJournalMutation.mutate,
  };
}
