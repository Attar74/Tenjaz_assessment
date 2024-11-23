<template>
  <transition name="fade">
    <!-- Modal -->
    <div
      v-if="props.isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-120">
        <h2 class="text-lg font-bold text-gray-800 mb-4">{{ title }}</h2>
        <p class="text-gray-600 mb-6">
          {{ confirmMessage }}
        </p>

        <!-- Modal Buttons -->
        <div class="flex justify-end space-x-4">
          <button
            @click="closeModal"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            @click="confirmDelete"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
const props = defineProps({
  isModalOpen: {
    default: false,
    type: Boolean,
  },
  title: {
    default: '',
    type: String,
  },
  confirmMessage: {
    default: '',
    type: String,
  },
});

const emits = defineEmits(['confirm', 'cancel']);

// Function to open the modal
const closeModal = () => {
  emits('cancel');
};

// Function to handle delete confirmation
const confirmDelete = () => {
  emits('confirm');
  // Perform your delete logic here
  closeModal();
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
