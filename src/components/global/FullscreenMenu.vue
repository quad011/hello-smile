<script setup>
import { useScrollLock } from "@vueuse/core";
import { onMounted } from "vue";
const props = defineProps({
  items: {
    type: Object,
  },
});

const isLocked = useScrollLock(document.body);

onMounted(() => {
  isLocked.value = true;
});
</script>

<template>
  <div
    class="fullscreen-menu text-base fixed left-0 top-0 w-screen h-screen text-center flex flex-col items-center justify-center z-30 backdrop-blur-[24px] text-black"
  >
    <div
      @click.native="scrollToTop"
      class="mb-5 text-14 lg:text-base link reversed cursor-pointer"
    >
      Home
    </div>
    <RouterLink to="#about" class="mb-5 text-14 lg:text-base link reversed"
      >Projects</RouterLink
    >
    <RouterLink
      to="/"
      class="text-14 lg:text-base link reversed"
      @click="goTo('work')"
      >Experience</RouterLink
    >
  </div>
</template>
