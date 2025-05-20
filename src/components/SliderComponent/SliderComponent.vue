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
const swiperRef = ref(null);
const isFirstLoad = ref(true);

const colorStack = ref([
  { color: props.items[0]?.backgroundColor || "#fff", key: 0 },
]);

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

  if (isFirstLoad.value) {
    isFirstLoad.value = false;
  }
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
    <div class="clip-wrapper absolute inset-0 z-0 overflow-hidden">
      <div class="bg-color-wrapper absolute inset-0">
        <div
          v-for="(layer, i) in colorStack"
          :key="layer.key"
          class="liquid-bg absolute inset-0"
          :class="{
            'animate-liquid': i === colorStack.length - 1 && !isFirstLoad,
          }"
        >
          <svg
            class="wave-mask absolute bottom-0 left-0 w-screen h-full"
            viewBox="0 0 1920 1400"
            preserveAspectRatio="xMinYMin slice"
          >
            <path
              :fill="layer.color"
              d="M31.8105 4.54688C42.8988 4.07325 54.6142 7.17835 66.9795 12.8262C91.727 24.1296 118.923 45.5432 148.694 68.4873C178.441 91.4123 210.728 115.839 245.591 133.073C279.916 150.042 316.769 160.054 356.192 154.792L358.072 154.53L358.077 154.529C398.191 148.251 433.892 127.955 468.664 104.607C503.466 81.2396 537.304 54.8414 573.811 36.2061C610.289 17.5848 649.366 6.75574 694.571 14.5312C739.788 22.3087 791.204 48.7113 852.329 104.691L852.343 104.704L852.357 104.716C887.835 132.707 919.043 166.03 950.282 195.51C981.496 224.966 1012.73 250.57 1048.17 262.965C1083.64 275.37 1123.28 274.527 1171.26 251.203C1219.22 227.889 1275.52 182.113 1344.37 104.655L1344.39 104.637L1344.4 104.617C1359.85 83.4549 1376.35 72.8081 1393.64 69.9736C1410.94 67.1373 1429.13 72.1084 1447.99 82.376C1485.72 102.923 1525.9 144.544 1566.58 186.482C1607.21 228.379 1648.35 270.589 1687.94 292.132C1707.74 302.909 1727.21 308.543 1746.07 306.346C1764.65 304.181 1782.56 294.425 1799.57 274.658L1800.38 273.709C1831.49 236.92 1849.94 220.258 1878.43 157.273L1879.79 154.239C1883.79 145.288 1893.96 122.556 1903.12 102.062C1907.71 91.8155 1912.04 82.1277 1915.23 75.002C1916.82 71.4393 1918.13 68.517 1919.04 66.4854C1919.21 66.1094 1919.36 65.7636 1919.5 65.4502V1385.5H0.5V17.6328C10.3689 9.0193 20.7984 5.01729 31.8105 4.54688Z"
            />
          </svg>
        </div>
      </div>
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
      class="!h-auto"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        :class="[
          `swiper-slide--${
            activeIndex.value === index
              ? 'active'
              : activeIndex.value < index
              ? 'next'
              : 'prev'
          }`,
          {
            // 'z-10': activeIndex !== index,
          },
        ]"
        class="swiper-slide py-10 lg:pb-20 lg:pt-16"
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

<style lang="scss">
.swiper-wrapper {
  height: auto !important;
}
</style>

<style lang="scss" scoped>
.slider-component {
  .clip-wrapper {
    clip-path: ellipse(150% 100% at 50% 100%);
    @media (min-width: 600px) {
      clip-path: ellipse(111% 100% at 50% 100%);
    }
  }
  .bg-color-wrapper {
    .wave-mask {
      z-index: 2;
      pointer-events: none;
      top: -28%;
      height: 130%;
    }
    .liquid-bg {
      transform: translateY(0);
      transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .animate-liquid {
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
    width: 55%;
    @media (min-width: 600px) {
      width: 50%;
    }
  }
  .swiper-slide-prev {
    position: relative;
    z-index: 1;
  }
}
</style>
