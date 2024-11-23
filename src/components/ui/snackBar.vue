<template>
  <div
    :class="[
      'fixed top-16 right-1/2 bg-gray-800 text-white py-2 px-4 rounded shadow-md transition-opacity duration-300',
      visible ? 'opacity-100' : 'opacity-0',
    ]"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Props
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000, // Default duration of 3 seconds
  },
  isVisible: {
    default: false,
    type: Boolean,
  },
});

const emits = defineEmits(['update:isVisible']);

// State
const visible = ref(props.isVisible);
let timeout: ReturnType<typeof setTimeout> | null = null;

// Show the snackbar
const showSnackbar = () => {
  visible.value = true;

  // Automatically hide after the duration
  timeout = setTimeout(() => {
    emits('update:isVisible', false);
  }, props.duration);
};

// Clear timeout on component unmount
onUnmounted(() => {
  if (timeout) {
    clearTimeout(timeout);
  }
});

// Show snackbar when mounted
onMounted(() => {
  showSnackbar();
});
</script>

<style>
/* Optional custom styling */
</style>
