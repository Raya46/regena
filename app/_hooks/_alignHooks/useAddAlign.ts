import axios from "axios";
import { useState } from "react";

export default function useAddAlign(onSuccess: () => void) {
  const [fields, setFields] = useState({
    title: "",
    content: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddAlign = async () => {
    setIsSubmiting(true);
    setError(null);
    try {
      await axios.post("http://localhost:2000/aligns", fields);
      onSuccess();
    } catch (error) {
      setError("something went wrong");
    } finally {
      setIsSubmiting(false);
    }
  };

  return {
    fields,
    setFields,
    isSubmiting,
    error,
    handleAddAlign,
  };
}
