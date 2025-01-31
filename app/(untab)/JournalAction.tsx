import JournalForm from "@/_components/JournalForm";
import useAddJournal from "@/_hooks/_journalHooks/useAddJournal";
import useUpdateJournal from "@/_hooks/_journalHooks/useUpdateJournal";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const JournalAction = () => {
  const { id, title, content, createdAt, mode } = useLocalSearchParams<{
    id: string;
    title: string;
    content: string;
    createdAt: string;
    mode: string;
  }>();

  const { isUpdating, updateJournal, fields, setFields } = useUpdateJournal();

  const {
    fieldsCreate,
    setFieldsCreate,
    isSubmiting: isSubmitingCreate,
    createJournal,
  } = useAddJournal();

  return mode == "create" ? (
    <JournalForm
      mode="create"
      onSubmit={() => createJournal()}
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
      onSubmit={() => updateJournal({ id })}
      isSubmiting={isUpdating}
      fields={fields}
      setFields={setFields}
    />
  );
};

export default JournalAction;
