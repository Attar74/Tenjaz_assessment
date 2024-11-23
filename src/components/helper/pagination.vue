<template>
  <div class="flex justify-center space-x-2">
    <!-- Previous Button -->
    <button
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
      class="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
    >
      Prev
    </button>

    <!-- Page Numbers -->
    <button
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-3 py-1 rounded',
        page === currentPage
          ? 'bg-blue-500 text-white'
          : page === 0
          ? 'bg-transparent text-gray-500'
          : 'bg-gray-300 hover:bg-gray-400',
      ]"
      :disabled="page === 0 || page == currentPage"
    >
      {{ !!page ? page : '...' }}
    </button>

    <!-- Next Button -->
    <button
      :disabled="currentPage === props.totalPages"
      @click="goToPage(currentPage + 1)"
      class="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// Props
const props = defineProps({
  totalPages: {
    type: Number,
    default: 1, // Total number of pages
  },
  initialPage: {
    type: Number,
    default: 1, // Optional, starts at 1 by default
  },
});

// Emits
const emit = defineEmits(['page-clicked']);

// Current page (local state)
let currentPage = ref(Number(props.initialPage));

// Generate visible page numbers dynamically
const visiblePages = computed(() => {
  const pages: number[] = [];

  if (props.totalPages <= 7) {
    // Show all pages if totalPages <= 7
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Show dots for large pagination
    if (currentPage.value <= 4) {
      pages.push(1, 2, 3, 4, 5, 0, props.totalPages);
    } else if (currentPage.value >= props.totalPages - 3) {
      pages.push(
        1,
        0,
        props.totalPages - 4,
        props.totalPages - 3,
        props.totalPages - 2,
        props.totalPages - 1,
        props.totalPages
      );
    } else {
      pages.push(
        1,
        0,
        currentPage.value - 1,
        currentPage.value,
        currentPage.value + 1,
        0,
        props.totalPages
      );
    }
  }
  return pages;
});

// Method to handle page navigation
const goToPage = (page: number) => {
  if (page < 1 || page > props.totalPages) return; // Prevent invalid pages
  currentPage.value = page;
  emit('page-clicked', page); // Emit the clicked page to the parent
};
</script>
