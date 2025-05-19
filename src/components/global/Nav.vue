<script setup>
const props = defineProps({
  items: {
    type: Object,
  },
});
</script>

<template>
  <nav class="text-base">
    <div
      @click.native="scrollToTop"
      class="mr-5 text-14 lg:text-base link reversed cursor-pointer"
    >
      SVI PROIZVODI
    </div>
    <RouterLink to="#about" class="text-14 lg:text-base link reversed"
      >NASA PRICA</RouterLink
    >
  </nav>
</template>
