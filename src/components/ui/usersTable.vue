<template>
  <div class="overflow-x-auto bg-white shadow rounded-lg">
    <table class="w-full table-auto border-collapse">
      <!-- Table Header -->
      <thead
        class="bg-gray-200 text-gray-600 uppercase text-sm hidden lg:table-header-group"
      >
        <tr>
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left">Phone</th>
          <th class="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody class="text-gray-700">
        <tr
          class="border-b hover:bg-gray-100 flex flex-col lg:table-row"
          v-for="user in users"
          :key="user.id"
        >
          <!-- Name -->
          <td class="p-3 flex flex-col lg:table-cell">
            <span class="block font-bold text-gray-600 lg:hidden">Name:</span>
            {{ user.firstName }} {{ user.lastName }}
          </td>
          <!-- Email -->
          <td class="p-3 flex flex-col lg:table-cell">
            <span class="block font-bold text-gray-600 lg:hidden">Email:</span>
            {{ user.email }}
          </td>
          <!-- Phone -->
          <td class="p-3 flex flex-col lg:table-cell">
            <span class="block font-bold text-gray-600 lg:hidden">Phone:</span>
            {{ user.phone }}
          </td>
          <!-- Actions -->
          <td
            class="p-3 flex flex-row flex-nowrap gap-x-2 lg:table-cell lg:justify-end"
          >
            <button
              @click="emits('updateModal', user)"
              class="bg-blue-500 text-white px-5 py-1 rounded hover:bg-blue-600 lg:mr-2"
            >
              Edit
            </button>
            <button
              @click="emits('deleteModal', user.id)"
              class="bg-red-500 text-white px-5 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { User } from '../../interfaces/User';

const props = defineProps({
  users: {
    type: Array<User>,
    default() {
      return [];
    },
  },
});

const emits = defineEmits(['updateModal', 'deleteModal']);
</script>
