<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Add a new note"
          ref="newNoteRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * props
 */

const props = defineProps({
  // bind what value that specifed in the component v-model attribute
  modelValue: {
    type: String,
    required: true,
  },
});

/**
 * emits
 */

const emit = defineEmits(['update:modelValue']);

</script>
