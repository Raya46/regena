import axios from "axios";
import { useState } from "react";

export default function useAddJournal(onSuccess: () => void) {
  const [fields, setFields] = useState({
    title: "",
    content: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddJournal = async () => {
    setIsSubmiting(true);
    setError(null);
    try {
      await axios.post("http://localhost:2000/journals", fields);
      onSuccess();
    } catch (error) {
      setError("error add journal");
    } finally {
      setIsSubmiting(false);
    }
  };

  return {
    fields,
    setFields,
    isSubmiting,
    error,
    handleAddJournal,
  };
}
