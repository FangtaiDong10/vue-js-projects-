<template>
  <teleport to=".modals-container">
    <div class="modal" v-if="modelValue">
      <h1>{{ title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>
        Username is : {{ userData.username }}
      </div>
    </div>
  </teleport>
</template>

<script setup>
// import { useSlots } from 'vue';
import {inject} from 'vue'

// const slots = useSlots()

// console.log(slots);

/**
 * props
 */
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified",
  },
});

/**
 * emit
 */
const emit = defineEmits(["update:modelValue"]);

/**
 * inject
 */
const userData = inject('user-data')

// const handleButtonClick = () => {
//   emit("update:modelValue", false);
// };
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
