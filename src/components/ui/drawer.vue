<template>
  <aside class="flex flex-shrink-0 h-[99vh]">
    <div
      class="z-50 flex-col flex-shrink-0 py-4 bg-white flex border-gray-200 transform transition-all duration-300 border-r pr-3"
      :class="[isCollapsed ? 'w-44' : 'w-[4.5rem]']"
    >
      <div class="flex flex-col flex-1 gap-y-2">
        <button
          type="button"
          class="bg-white rounded-full p-1 border border-gray-200 absolute top-6 z-50 transform transition-all duration-300 -right-4 cursor-pointer hover:scale-125"
          @click="toggleSidebar"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div class="flex flex-col gap-y-2 w-full px-[0.6rem]">
          <RouterLink
            v-for="(option, index) in DrawerOptions"
            :to="option.path"
          >
            <button
              class="my-[0.2rem] py-[0.4rem] cursor-pointer flex justify-start gap-x-[0.2rem] w-full text-[#000] rounded-md px-2"
              :class="
                route.name && route.name?.toString().includes(option.path)
                  ? 'bg-[#ebecec]'
                  : 'bg-[#fff] hover:text-[#a8a8a8] text-[#2A2F4F]'
              "
            >
              <div
                class="flex space-x-2 text[1rem] leading-7 font-bold my-auto"
              >
                <div class="flex items-center">
                  <component
                    clas="m-auto"
                    :is="components[index]"
                    color="#000"
                  />
                </div>
                <p v-if="isCollapsed">
                  {{ option.name }}
                </p>
              </div>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import dashboard from '../../assets/svgs/dashboard.vue';
import users from '../../assets/svgs/users.vue';

const isLgOrSmall = ref(false);

// Function to check if screen size is medium
const checkScreenSize = () => {
  isLgOrSmall.value = window.matchMedia('(max-width: 1024px)').matches;

  isCollapsed.value = !isLgOrSmall.value;
};

const route = useRoute();

const isCollapsed = ref(true);

const components = [dashboard, users];

const DrawerOptions = ref([
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
  },
  {
    name: 'Users',
    icon: 'users',
    path: 'users',
  },
]);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

onMounted(() => {
  checkScreenSize(); // Initial check
  window.addEventListener('resize', checkScreenSize); // Watch for changes
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize); // Clean up event listener
});
</script>
