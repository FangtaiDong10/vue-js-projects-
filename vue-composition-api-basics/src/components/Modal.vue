<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
// import { useSlots } from 'vue';

// const slots = useSlots()

// console.log(slots);

/**
 * props
 */
  const props = defineProps({
    title: {
      type: String,
      default: "No title specified",
    },
  });
  
  console.log(props.title);
  


</script>

<style>
.modal {
  background: darkgreen;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
