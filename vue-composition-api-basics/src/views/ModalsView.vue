<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show light modals?
        <input
          v-model="showLightModals"
          type="checkbox" />
      </label>
    </div>
    <pre>{{ showLightModals }}</pre>
    <button @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showLightModals ? ModalLight : Modal"
      title="My modal title (via prop)"
    >
      <!-- <template #title>My new title</template> -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        exercitationem magnam deserunt sed sunt neque ipsum, inventore possimus
        consectetur obcaecati voluptatibus voluptatem cupiditate praesentium
        beatae harum id debitis labore veniam!
      </p>
    </component>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalLight from "@/components/ModalLight.vue";

/**
 * modals
 */
const showLightModals = ref(false);
const showModal = ref(false);
</script>
