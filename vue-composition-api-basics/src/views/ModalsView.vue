<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal">
      <template #title>My new title</template>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        exercitationem magnam deserunt sed sunt neque ipsum, inventore possimus
        consectetur obcaecati voluptatibus voluptatem cupiditate praesentium
        beatae harum id debitis labore veniam!
      </p>
    </Modal>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

/**
 * modals
 */
const showModal = ref(false);
</script>
