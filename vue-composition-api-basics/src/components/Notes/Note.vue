<template>
  <!-- A Note Component -->
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-gray-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link
        :to="`/editnote/${note.id}`"
        href="#"
        class="card-footer-item">Edit</router-link>
      <a @click.prevent="storeNotes.deleteNote(note.id)" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

/**
 * props
 */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});



/**
 * store
 */
const storeNotes = useStoreNotes();

/**
 * charater length
 */
const characterLength = computed(() => {
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});

</script>
