<template>
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
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";

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
 * emits
 */
const emit = defineEmits(["deleteClicked"]);

/**
 * charater length
 */
const characterLength = computed(() => {
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});

/**
 * handle delete clicked
 */
const handleDeleteClicked = () => {
  // console.log("handleDeleteClicked");
  emit("deleteClicked", props.note.id);
};
</script>
