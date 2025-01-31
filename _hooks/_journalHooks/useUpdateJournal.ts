import API from "@/_constant/API";
import { Journal } from "@/_constant/JournalType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface JournalFields {
  title: string;
  content: string;
}

export default function useUpdateJournal() {
  const [fields, setFields] = useState<JournalFields>({
    title: "",
    content: "",
  });
  const queryClient = useQueryClient();

  const updateJournal = async (id: string) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.put(`${API}/journals/${id}`, fields, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

  const updateJournalMutation = useMutation({
    mutationFn: ({ id }: { id: string }) => updateJournal(id),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: ["journals"] });
      const previousJournals = queryClient.getQueryData<Journal[]>([
        "journals",
      ]);
      queryClient.setQueryData<Journal[]>(["journals"], (old = []) =>
        old.map((journal) =>
          journal.id === id ? { ...journal, ...fields } : journal
        )
      );
      return { previousJournals };
    },
    onError: (error, __, context) => {
      if (error) {
        console.error(error);
      }
      if (context?.previousJournals) {
        queryClient.setQueryData(["journals"], context.previousJournals);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["journals"] });
    },
  });

  return {
    updateJournal: updateJournalMutation.mutate,
    isUpdating: updateJournalMutation.isPending,
    fields,
    setFields,
  };
}
