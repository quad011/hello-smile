<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  bgImage: {
    type: [Object, String],
  },
});
</script>

<template>
  <div
    ref="header"
    class="page-header h-screen flex items-end relative overflow-hidden"
  >
    <!-- <parallax> -->
    <h1
      v-html="title"
      class="text-black text-[10.5vw] whitespace-nowrap font-bold uppercase relative left-[-.7vw]"
    ></h1>
    <!-- </parallax> -->
    <!-- <parallax :factor="0.5">
      <Picture :absolute="true" :src="bgImage" />
    </parallax> -->
  </div>
</template>

<style lang="scss" scoped></style>
