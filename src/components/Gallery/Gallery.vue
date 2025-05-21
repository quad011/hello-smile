<script setup>
import hardCodedItems from "./items";

const props = defineProps({
  items: {
    type: [Array, Object],
    default: () => hardCodedItems,
  },
});
</script>

<template>
  <div class="gallery">
    <!-- IMAGES -->
    <div v-for="(item, index) in items" :key="index" class="image">
      <animated-element :fromY="50" :toY="0" :delay="index * 0.1">
        <img class="w-full h-full" :src="item.image" :alt="'hello smile'" />
      </animated-element>
    </div>
    <!-- END :: IMAGES -->
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  .image {
    width: 20%;
  }
}
</style>
