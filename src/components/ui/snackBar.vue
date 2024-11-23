<template>
  <transition name="fade">
    <div
      v-if="props.isVisible"
      class="fixed top-[6rem] right-[3rem] bg-gray-800 text-white py-2 px-4 rounded shadow-md transition-opacity duration-300"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onUnmounted, watch, computed } from 'vue';

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
const isVisible = computed(() => props.isVisible);

watch(isVisible, () => {
  hideSnackbar();
});

let timeout: ReturnType<typeof setTimeout> | null = null;

// Show the snackbar
const hideSnackbar = () => {
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
</script>
