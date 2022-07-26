<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>


      <Note
        v-for="note in notes"
        :key="note.id" 
        :note="note"
        />

    </div>

    
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue"


/**
 * notes
 */

const newNote = ref("");

const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quasi tempora nisi aut veritatis, magnam sit? Rem eos modi sapiente reprehenderit sint cupiditate dolorum laborum maiores corrupti, dolore, commodi unde!",
  },
  {
    id: "id2",
    content: "This is a shorter note!",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  // push what input into notes list
  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
