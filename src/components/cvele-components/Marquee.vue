<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
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
  <div class="marquee w-full overflow-hidden flex items-center">
    <div
      :class="`flex items-center w-[calc(200%)] ${
        reversed ? 'marquee-content-reversed' : 'marquee-content'
      }`"
    >
      <div
        v-if="marqueeText"
        class="marquee-item flex items-center w-screen"
        v-for="i in 4"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          v-html="item.text"
          class="text-[8.46vw] font-bold uppercase"
        />
      </div>

      <div
        v-else
        class="marquee-item flex items-center justify-between w-screen mx-2 lg:mx-20"
        v-for="n in 2"
      >
        <img
          v-for="(item, index) in items"
          :key="index"
          :src="item.imgUrl"
          :alt="item.alt || 'technology'"
          class="w-auto h-[12vw] lg:h-[6vw] object-contain lg:mx-0"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marquee-content {
  animation: scrolling 10s linear infinite;
  &-reversed {
    animation: scrolling-reversed 10s linear infinite;
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrolling-reversed {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
