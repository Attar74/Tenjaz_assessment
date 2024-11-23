<template>
  <div class="py-[1.75rem]">
    <div class="w-full border border-gray-200 shadow rounded-md" v-for="i in 3">
      <div class="animate-pulse p-4">
        <!-- Header Skeleton -->
        <div class="grid grid-cols-4 gap-4 mb-4">
          <div class="h-4 bg-gray-300 rounded col-span-1"></div>
          <div class="h-4 bg-gray-300 rounded col-span-1"></div>
          <div class="h-4 bg-gray-300 rounded col-span-1"></div>
          <div class="h-4 bg-gray-300 rounded col-span-1"></div>
        </div>

        <!-- Rows Skeleton -->
        <div v-for="n in 5" :key="n" class="grid grid-cols-4 gap-4 mb-2">
          <div class="h-4 bg-gray-200 rounded col-span-1"></div>
          <div class="h-4 bg-gray-200 rounded col-span-1"></div>
          <div class="h-4 bg-gray-200 rounded col-span-1"></div>
          <div class="h-4 bg-gray-200 rounded col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
