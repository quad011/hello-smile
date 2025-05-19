<script setup>
import { ref } from "vue";

const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  innerClass: {
    type: String,
  },
  absolute: {
    type: Boolean,
    default: false,
  },
});

const isLoaded = ref(false);
const handleLoad = () => {
  isLoaded.value = true;
};
</script>

<template>
  <div
    :class="`picture w-full h-full ${
      absolute ? 'absolute left-0 top-0' : 'relative'
    }`"
  >
    <img
      :src="src"
      :alt="alt || 'resume'"
      class="absolute w-full h-full object-cover"
      :class="{ 'image-loaded': isLoaded }"
      @load="handleLoad"
    />
    <div
      v-if="!isLoaded"
      class="placeholder absolute w-full h-full flex items-center justify-center bg-white"
    >
      <Spinner />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.picture {
  img {
    transition: opacity 0.3s ease;
    opacity: 0;
  }
  .image-loaded {
    opacity: 1;
  }
}
</style>
