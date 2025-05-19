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
const nextIndex = ref(0); // temp index for bg overlay

const isAnimating = ref(false);
const swiperRef = ref(null);

const onSlideChange = (swiper) => {
  if (isAnimating.value) return;

  nextIndex.value = swiper.activeIndex; // set this immediately for reveal bg

  isAnimating.value = true;

  setTimeout(() => {
    prevIndex.value = swiper.activeIndex;
    activeIndex.value = swiper.activeIndex;
    isAnimating.value = false;
    emit("update:currentIndex", swiper.activeIndex);
  }, 100); // matches animation duration
};

onMounted(() => {
  if (swiperRef.value?.swiper) {
    activeIndex.value = swiperRef.value.swiper.activeIndex;
    prevIndex.value = swiperRef.value.swiper.activeIndex;
  }
});
</script>

<template>
  <div class="slider-component relative overflow-hidden">
    <!-- BG COLOR -->
    <div
      class="bg-base absolute inset-0 z-0 transition-colors duration-500"
      :style="{ backgroundColor: items[prevIndex]?.backgroundColor || '#fff' }"
    />

    <div
      v-if="isAnimating"
      class="bg-reveal-overlay absolute inset-0 z-10"
      :style="{
        backgroundColor: items[activeIndex]?.backgroundColor || '#fff',
      }"
    />
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
        class="swiper-slide"
      >
        <div class="slide-inner mx-auto py-10 lg:py-24">
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
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.slider-component {
  .bg-reveal-overlay {
    transform: translateY(100%);
    pointer-events: none;
    z-index: 10;
  }

  @keyframes reveal-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  .swiper-slide {
    .slide-inner {
      // width: 55%;
      @media (min-width: 600px) {
        width: 65%;
      }
      @media (min-width: 1024px) {
        width: 50%;
      }
    }
  }
}
</style>
