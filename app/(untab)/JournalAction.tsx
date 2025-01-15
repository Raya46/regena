import { Text, View } from "react-native";
import React from "react";
import useUpdateJournal from "../_hooks/_journalHooks/useUpdateJournal";
import useAddJournal from "../_hooks/_journalHooks/useAddJournal";
import useFetchJournal from "../_hooks/_journalHooks/useFetchJournal";
import { useLocalSearchParams } from "expo-router";
import JournalForm from "../_components/JournalForm";

const JournalAction = () => {
  const { refetch } = useFetchJournal();
  const { id, title, content, createdAt, mode } = useLocalSearchParams<{
    id: string;
    title: string;
    content: string;
    createdAt: string;
    mode: string;
  }>();

  const { fields, setFields, isSubmiting, handleUpdateJournal } =
    useUpdateJournal(refetch);

  const {
    fields: fieldsCreate,
    setFields: setFieldsCreate,
    isSubmiting: isSubmitingCreate,
    handleAddJournal,
  } = useAddJournal(refetch);

  return mode == "create" ? (
    <JournalForm
      mode="create"
      onSubmit={handleAddJournal}
      isSubmiting={isSubmitingCreate}
      fields={fieldsCreate}
      setFields={setFieldsCreate}
    />
  ) : (
    <JournalForm
      mode="update"
      initialTitle={title}
      initialContent={content}
      createdAt={createdAt}
      onSubmit={() => handleUpdateJournal(parseInt(id))}
      isSubmiting={isSubmiting}
      fields={fields}
      setFields={setFields}
    />
  );
};

export default JournalAction;
