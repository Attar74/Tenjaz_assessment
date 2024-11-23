<template>
  <div class="default-layout flex-col">
    <Header />
    <div class="flex">
      <div class="default-sidebar sticky top-0">
        <BaseSideBar />
      </div>
      <main class="flex p-[3rem] xl:p-[5rem] w-full">
        <RouterView class="mx-auto" />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/ui/header.vue';
import BaseSideBar from '@/components/ui/drawer.vue';
</script>
