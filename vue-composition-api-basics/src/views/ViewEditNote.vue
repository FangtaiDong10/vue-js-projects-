<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
      ref="addEditNoteRef"
    >
      <template v-slot:buttons>
        <button @click="$router.push('/')" class="button is-link is-light">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>
<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";

/**
 * note
 */
const noteContent = ref("");
</script>
