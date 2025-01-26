type Note = {
  title: string;
  subtitle?: string | null;
  message: string;
  actionText?: string | null;
};

export const useNoteStore = defineStore("notification", () => {
  const state = ref<Note[]>([]);

  function addNote(
    title: string,
    message: string,
    subtitle: string | null = null,
    actionText: string | null = "OK"
  ) {
    state.value.push({
      title,
      subtitle,
      message,
      actionText,
    });
  }

  function addError(message: string) {
    return addNote("🚨 Error", message, null, "Ok");
  }

  function addWarn(message: string) {
    return addNote("⚠️ Warning", message, null, "Ok");
  }

  function addSuccess(message: string) {
    return addNote("✅ Success", message, null, "Ok");
  }

  function clearNotes() {
    state.value = [];
  }

  function clearNote(index: number) {
    state.value.splice(index, 1);
  }

  return {
    state,
    addNote,
    clearNotes,
    clearNote,
    addError,
    addWarn,
    addSuccess,
  };
});
