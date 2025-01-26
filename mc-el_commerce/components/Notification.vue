<script setup lang="ts">
import { useNoteStore } from "@/stores/note.store";
const noteStore = useNoteStore();

const setOpen = (index: number) => {
  noteStore.clearNote(index);
};
</script>

<template>
  <div
    class="absolute z-50 inset-0 flex items-center justify-center"
    v-for="(note, index) in noteStore.state"
    :key="index"
  >
    <ion-alert
      :is-open="true"
      :header="note.title"
      :sub-header="note.subtitle"
      :message="note.message"
      :buttons="[note.actionText]"
      @didDismiss="setOpen(index)"
    />
  </div>
</template>
