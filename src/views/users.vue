<template>
  <div class="container mx-auto md:w-[80rem]">
    <div class="flex items-center justify-between mb-3">
      <h1 class="text-2xl font-bold text-gray-700">Users Table</h1>
      <div class="flex justify-start gap-x-10">
        <div
          class="relative flex items-center justify-center w-full max-w-sm px-2 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <input
            v-model="filters.searchTerm"
            type="text"
            placeholder="Search by name"
            class="border-0 focus:border-transparent focus:ring-0 focus:outline-none w-full"
          />
          <button
            @click="filters.searchTerm = ''"
            v-if="filters.searchTerm.length"
            class="transform hover:scale-[1.2] absolute right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Users Table -->
    <Loader v-if="isPageLoading" />
    <div
      class="overflow-x-auto bg-white shadow rounded-lg"
      v-else-if="users.length"
    >
      <table class="w-full table-auto border-collapse">
        <!-- Table Header -->
        <thead class="bg-gray-200 text-gray-600 uppercase text-sm">
          <tr class="cursor-pointer">
            <th class="p-3 text-left">Name</th>
            <th class="p-3 text-left">Email</th>
            <th class="p-3 text-left">Phone</th>
            <!-- <th class="p-3 text-left">Status</th> -->
            <th class="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody class="text-gray-700">
          <!-- Row 1 -->
          <tr
            class="border-b hover:bg-gray-100 cursor-pointer"
            v-for="user in users"
            :key="user.id"
          >
            <td class="p-3">{{ user.firstName }} {{ user.lastName }}</td>
            <td class="p-3">{{ user.email }}</td>
            <td class="p-3">{{ user.phone }}</td>
            <!-- <td class="p-3">
              <p
                class="text-[#fff] rounded-md py-1 px-2 text-center"
                :class="
                  user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                "
              >
                {{ user.status }}
              </p>
            </td> -->
            <td class="p-3 text-center flex flex-col lg:flex-row gap-y-5">
              <button
                @click="openUpdateModal(user)"
                class="bg-blue-500 text-white px-5 py-1 rounded hover:bg-blue-600 mr-2"
              >
                Edit
              </button>
              <button
                @click="openDeleteModal(user.id)"
                class="bg-red-500 text-white px-5 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center h-[50vh] flex items-center justify-center">
      <p class="text-3xl">
        Ooops, No Users match
        <span class="font-bold underline text-[#349f44]">
          {{ filters.searchTerm }}</span
        >
        ...!
      </p>
    </div>
    <!-- Pagination Component -->
    <div class="mt-10">
      <Pagination
        v-if="!!pagination.totalPages"
        :totalPages="pagination.totalPages"
        @page-clicked="handlePageClick"
      />
    </div>
    <ConfirmModal
      :isModalOpen="isModalOpen"
      title="Confirm Deletion"
      confirmMessage="Are you sure you want to delete this user?"
      @confirm="handleDelete"
      @cancel="closeModals"
    />
    <EditModal
      :isModalOpen="isUpdateModalOpen"
      :user="userToBeUpdates"
      title="Confirm Update"
      confirmMessage="Are you sure you want to Update this user?"
      @confirm="handleUpdate"
      @cancel="closeModals"
    />
    <SnackBar
      v-if="snackbarVisible"
      :isVisible="snackbarVisible"
      :message="snackbarMessage"
      :duration="3000"
      @update:isVisible="snackbarVisible = $event"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'; // Ensure this line is present
import { ref, nextTick, computed, watch } from 'vue';
import ConfirmModal from '../components/modals/confirmDelete.vue';
import EditModal from '../components/modals/editModal.vue';
import SnackBar from '../components/ui/snackBar.vue';
import Loader from '../components/ui/Loader.vue';
import Pagination from '../components/helper/pagination.vue';
import { generateQueryString } from '../utils/queryUtils';
import { userService } from '../services/user.service.ts';

const isModalOpen = ref(false);
const isUpdateModalOpen = ref(false);
const users = ref([]);
const filters = ref({
  searchTerm: '',
});

const snackbarMessage = ref('');
const snackbarVisible = ref(false);

const pagination = ref({
  skip: 0,
  limit: 10,
  totalPages: 1,
});

const isPageLoading = ref(true);

const idToBeDeleted = ref('');
const userToBeUpdates = ref({});

const handlePageClick = (page) => {
  pagination.value.skip = page - 1;
  fetchUsers();
};

const handleDelete = async () => {
  try {
    users.value = users.value.filter((user) => user.id !== idToBeDeleted.value);
    await userService.deleteUser(idToBeDeleted.value);
    snackbarVisible.value = true;
    snackbarMessage.value = 'User Deleted Successfully';
  } catch {
  } finally {
    idToBeDeleted.value = '';
    !users.value.length && fetchUsers();
  }
};

const handleUpdate = async (user) => {
  try {
    await userService.updateUser(user.id, generateQueryString(user));
    snackbarVisible.value = true;
    snackbarMessage.value = 'User updated Successfully';
  } catch {
  } finally {
    userToBeUpdates.value = Object.assign({});
  }
};
const openUpdateModal = (user) => {
  userToBeUpdates.value = JSON.parse(JSON.stringify(user));
  isUpdateModalOpen.value = true;
};

const openDeleteModal = (id) => {
  idToBeDeleted.value = id;
  isModalOpen.value = true;
};

const closeModals = (value) => {
  isModalOpen.value = false;
  isUpdateModalOpen.value = false;
  userToBeUpdates.value = {};
  idToBeDeleted.value = '';
};

watch(
  () => filters.value.searchTerm,
  (val) => {
    fetchUsers();
  }
);

const fetchUsers = async () => {
  isPageLoading.value = true;
  const queryParams = {
    limit: 10,
    skip: pagination.value.skip * 10,
  };
  try {
    const { data } = await userService.getUsers(
      generateQueryString({ ...queryParams, q: filters.value.searchTerm }),
      !!filters.value.searchTerm
    );
    users.value = data.users.map(
      ({ email, phone, firstName, lastName, id }, index) => {
        return {
          email,
          phone,
          firstName,
          lastName,
          id,
        };
      }
    );
    pagination.value.totalPages = Math.ceil(
      data.total / pagination.value.limit
    );
  } catch (error) {
  } finally {
    isPageLoading.value = false;
  }
};
onMounted(() => {
  nextTick(() => {
    fetchUsers();
  });
});
</script>
