<template>
  <transition name="fade">
    <!-- Modal -->
    <div
      v-if="props.isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-150">
        <h2 class="text-lg font-bold text-gray-800 mb-4">{{ title }}</h2>
        <p class="text-gray-600 mb-6">
          {{ confirmMessage }}
        </p>

        <form @submit.prevent="confirmUpdate">
          <div class="flex flex-col gap-y-4 my-4">
            <div class="grid grid-cols-2 gap-x-4">
              <div>
                <label for="f_name" class="text-gray-600 mb-2"
                  >First Name</label
                >
                <div
                  class="flex items-center justify-center w-full max-w-sm px-2 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <input
                    type="text"
                    id="f_name"
                    placeholder="Enter first name"
                    v-model="user.firstName"
                    class="border-0 focus:border-transparent focus:ring-0 focus:outline-none w-full"
                  />
                </div>
              </div>
              <div>
                <label for="l_name" class="text-gray-600 mb-2">Last Name</label>
                <div
                  class="flex items-center justify-center w-full max-w-sm px-2 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <input
                    type="text"
                    id="l_name"
                    placeholder="Enter last name"
                    v-model="user.lastName"
                    class="border-0 focus:border-transparent focus:ring-0 focus:outline-none w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <label for="email" class="text-gray-600 mb-2">Email</label>
              <div
                class="flex items-center justify-center w-full max-w-sm px-2 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  v-model="user.email"
                  class="border-0 focus:border-transparent focus:ring-0 focus:outline-none w-full"
                />
              </div>
            </div>
            <div>
              <label for="phone" class="text-gray-600 mb-2">Phone</label>
              <div
                class="flex items-center justify-center w-full max-w-sm px-2 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter phone"
                  v-model="user.phone"
                  class="border-0 focus:border-transparent focus:ring-0 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
          <!-- Modal Buttons -->
          <div class="flex justify-end space-x-4">
            <button
              @click="closeModal"
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="
                !user.firstName || !user.lastName || !user.email || !user.phone
              "
              class="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    default: () => {
      return {};
    },
  },
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
const confirmUpdate = () => {
  emits('confirm', props.user);
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
