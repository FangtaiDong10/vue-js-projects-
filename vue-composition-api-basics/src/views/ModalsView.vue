<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <div
      v-if="showModal"
      class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores,
        sapiente ut harum adipisci corrupti cupiditate distinctio impedit a sint
        placeat minima accusamus maiores eum similique voluptate illum saepe
        odio.
      </p>
      <button @click="showModal = false">Hide modal</button>
    </div>
  </div>
</template>

<script setup>
/**
 * imports
 */
  import { ref } from 'vue';

/**
 * modals
 */
const showModal = ref(false)


</script>

<style>
.modal{
  background: darkgreen;
  padding: 10px;
}
</style>
