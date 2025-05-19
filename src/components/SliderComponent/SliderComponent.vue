<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import Slide from "./Slide.vue";
import hardCodedItems from "./items";

const props = defineProps({
  items: {
    type: [Array, Object],
    default: () => hardCodedItems,
  },
});

const emit = defineEmits(["update:currentIndex"]);

const activeIndex = ref(0);
const prevIndex = ref(0);
const nextIndex = ref(0);

const colorStack = ref([
  { color: props.items[0]?.backgroundColor || "#fff", key: 0 },
]);

const swiperRef = ref(null);

const onSlideChange = (swiper) => {
  nextIndex.value = swiper.activeIndex;

  const nextColor = props.items[swiper.activeIndex]?.backgroundColor || "#fff";

  // Push new color on top for reveal
  colorStack.value.push({ color: nextColor, key: Date.now() });

  // Optional: Keep last 2 colors to overlap, so no white shows
  if (colorStack.value.length > 2) {
    colorStack.value = colorStack.value.slice(-2);
  }

  prevIndex.value = swiper.activeIndex;
  activeIndex.value = swiper.activeIndex;
  emit("update:currentIndex", swiper.activeIndex);
};

onMounted(() => {
  if (swiperRef.value?.swiper) {
    activeIndex.value = swiperRef.value.swiper.activeIndex;
    prevIndex.value = swiperRef.value.swiper.activeIndex;
  }
});
</script>

<template>
  <div class="slider-component relative">
    <!-- BG COLOR -->
    <div class="bg-color-wrapper absolute inset-0 z-0 overflow-hidden">
      <div
        v-for="(layer, i) in colorStack"
        :key="layer.key"
        class="liquid-bg absolute inset-0"
        :style="{ backgroundColor: layer.color, zIndex: i }"
        :class="{ 'animate-liquid': i === colorStack.length - 1 }"
      />
    </div>
    <!-- END :: BG COLOR -->

    <Swiper
      @slideChange="onSlideChange"
      :initial-slide="activeIndex"
      :loop="false"
      :centered-slides="true"
      :slides-per-view="'auto'"
      :grab-cursor="true"
      :speed="1200"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        :class="[
          `swiper-slide--${
            activeIndex === index
              ? 'active'
              : activeIndex < index
              ? 'next'
              : 'prev'
          }`,
          {
            'z-4': activeIndex !== index,
          },
        ]"
        class="swiper-slide py-10 lg:py-24"
      >
        <Slide
          :theme="item.backgroundColor"
          :isActive="activeIndex === Number(index)"
          :isPrev="activeIndex > Number(index)"
          :isNext="activeIndex < Number(index)"
          :title="item.title"
          :caption="item.caption"
          :description="item.description"
          :headline="item.headlineTags"
          :backgroundImage="item.backgroundImage"
          :text="item.text"
          :image="item.image"
        />
        <!-- </div> -->
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.slider-component {
  .bg-color-wrapper {
    .liquid-bg {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: var(---wrapper);
      transform: translateY(0%);
      animation-fill-mode: forwards;
      z-index: 0;
      overflow: hidden;
      clip-path: ellipse(150% 100% at 50% 100%);
      @media (min-width: 600px) {
        clip-path: ellipse(111% 100% at 50% 100%);
      }
    }

    .animate-liquid {
      transform: translateY(150%);
      animation: riseUp 1s ease forwards;
    }
  }

  @keyframes riseUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  .swiper-slide {
    // .slide-inner {
    // width: 55%;
    @media (min-width: 600px) {
      width: 65%;
    }
    @media (min-width: 1024px) {
      width: 50%;
    }
    // }
  }
}
</style>
