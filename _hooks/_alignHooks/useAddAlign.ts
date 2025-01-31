import { Align } from "@/_constant/AlignType";
import API from "@/_constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function useAddAlign() {
  const [fields, setFields] = useState({
    id: "",
    title: "",
    content: "",
    notification: false,
  });

  const [showContent, setShowContent] = useState(false);
  const queryClient = useQueryClient();

  const handleAddAlign = async () => {
    try {
      console.log(fields);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.post<Align>(`${API}/aligns`, fields, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      console.error("Error creating align:", error);
      throw error;
    }
  };

  const createAlignMutation = useMutation({
    mutationFn: handleAddAlign,
    onSuccess: (newAlign) => {
      if (newAlign) {
        queryClient.setQueryData<Align[]>(["aligns"], (oldAligns = []) => [
          newAlign,
          ...oldAligns,
        ]);

        setFields({
          ...fields,
          id: newAlign.id,
          content: newAlign.content,
        });

        setShowContent(true);
      }
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  return {
    fields,
    setFields,
    isSubmiting: createAlignMutation.isPending,
    createAlign: createAlignMutation.mutate,
    showContent,
  };
}
