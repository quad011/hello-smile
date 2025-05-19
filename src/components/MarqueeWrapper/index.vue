<script setup>
import items from "./items";

const props = defineProps({
  title: {
    type: String,
  },
  marqueeText: {
    type: Boolean,
  },
  reversed: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="marquee-wrapper flex flex-col relative overflow-hidden my-10 lg:my-20"
  >
    <h2 v-html="title" class="text-32 lg:text-40 px-4 lg:px-16 mb-5 lg:mb-10" />
    <!-- MARQUEE -->
    <Marquee
      :items="items.images"
      :marqueeText="marqueeText"
      :reversed="reversed"
    />
    <!-- MARQUEE -->
  </div>
</template>

<style lang="scss" scoped></style>
