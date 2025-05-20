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

const wavePaths = [
  "M31.8105 4.54688C42.8988 4.07325 54.6142 7.17835 66.9795 12.8262C91.727 24.1296 118.923 45.5432 148.694 68.4873C178.441 91.4123 210.728 115.839 245.591 133.073C279.916 150.042 316.769 160.054 356.192 154.792L358.072 154.53L358.077 154.529C398.191 148.251 433.892 127.955 468.664 104.607C503.466 81.2396 537.304 54.8414 573.811 36.2061C610.289 17.5848 649.366 6.75574 694.571 14.5312C739.788 22.3087 791.204 48.7113 852.329 104.691L852.343 104.704L852.357 104.716C887.835 132.707 919.043 166.03 950.282 195.51C981.496 224.966 1012.73 250.57 1048.17 262.965C1083.64 275.37 1123.28 274.527 1171.26 251.203C1219.22 227.889 1275.52 182.113 1344.37 104.655L1344.39 104.637L1344.4 104.617C1359.85 83.4549 1376.35 72.8081 1393.64 69.9736C1410.94 67.1373 1429.13 72.1084 1447.99 82.376C1485.72 102.923 1525.9 144.544 1566.58 186.482C1607.21 228.379 1648.35 270.589 1687.94 292.132C1707.74 302.909 1727.21 308.543 1746.07 306.346C1764.65 304.181 1782.56 294.425 1799.57 274.658L1800.38 273.709C1831.49 236.92 1849.94 220.258 1878.43 157.273L1879.79 154.239C1883.79 145.288 1893.96 122.556 1903.12 102.062C1907.71 91.8155 1912.04 82.1277 1915.23 75.002C1916.82 71.4393 1918.13 68.517 1919.04 66.4854C1919.21 66.1094 1919.36 65.7636 1919.5 65.4502V1385.5H0.5V17.6328C10.3689 9.0193 20.7984 5.01729 31.8105 4.54688Z",
  "M81.4658 -12.7494C114.002 -15.6423 150.34 -11.2727 185.469 0.249634C255.735 23.2972 321.07 74.9268 341.516 154.16L341.551 154.296L341.65 154.393C466.4 276.137 687.254 253.003 805.906 87.2906L805.929 87.2604L805.945 87.2272C824.931 50.006 843.14 27.8267 860.97 16.8278C878.76 5.85346 896.219 5.98136 913.835 13.5026C931.485 21.0384 949.285 35.9955 967.671 54.6774C986.054 73.3568 1004.97 95.7009 1024.88 117.989C1064.66 162.521 1108.39 206.822 1159.46 220.549C1210.62 234.301 1268.97 217.348 1337.87 139.833L1337.89 139.814L1337.9 139.795C1368.82 97.4364 1401.96 83.1733 1436.42 82.9948C1470.93 82.8159 1506.82 96.7661 1543.25 110.996C1579.64 125.208 1616.55 139.696 1652.98 140.425C1688.89 141.144 1724.29 128.497 1758.26 89.2135L1759.88 87.3229C1761.81 85.0374 1763.83 83.569 1765.91 82.7799C1767.99 81.9919 1770.16 81.8695 1772.42 82.3229C1776.98 83.2342 1781.91 86.4684 1787.1 91.2731C1797.49 100.878 1808.71 116.506 1819.91 131.336C1825.49 138.739 1831.07 145.936 1836.53 152.052C1841.98 158.164 1847.33 163.225 1852.46 166.333C1857.59 169.441 1862.59 170.64 1867.26 168.873C1871.78 167.168 1875.85 162.752 1879.44 155L1879.79 154.239C1883.79 145.287 1893.96 122.556 1903.12 102.062C1907.71 91.8152 1912.04 82.1273 1915.23 75.0016C1916.82 71.4389 1918.13 68.5166 1919.04 66.485C1919.21 66.1089 1919.36 65.7633 1919.5 65.4498V1385.5H0.5V17.6334C20.3891 0.241508 49.0168 -9.86409 81.4658 -12.7494Z",
  "M0.5 -1.79132C10.339 -10.3448 22.6628 -13.073 36.8516 -11.3187C51.136 -9.5525 67.2816 -3.24499 84.5967 6.20477C119.226 25.1037 158.393 56.4923 196.488 88.8942C234.563 121.279 271.574 154.683 301.831 177.543C316.959 188.972 330.435 197.793 341.539 202.537C352.603 207.263 361.527 208.028 367.329 202.953L367.436 202.859L367.478 202.724C377.088 171.753 390.305 146.391 409.179 126.946C428.048 107.506 452.598 93.9521 484.923 86.6384C549.607 72.003 645.377 82.365 788.871 120.559L789.262 120.663L789.445 120.303C827.396 45.9007 871.585 16.0462 918.7 11.1569C965.876 6.26141 1016.12 26.3733 1066.21 52.2419C1091.25 65.1741 1116.21 79.5219 1140.73 92.8845C1165.23 106.241 1189.28 118.606 1212.45 127.542C1258.78 145.41 1301.73 149.617 1337.81 120.465L1337.87 120.424L1337.9 120.371C1353.37 99.1866 1369.28 86.0951 1385.56 79.0524C1401.82 72.0115 1418.49 70.9984 1435.47 74.0368C1469.47 80.121 1504.67 102.429 1540.42 125.047C1576.11 147.632 1612.34 170.519 1648.25 177.552C1666.23 181.072 1684.14 180.626 1701.88 174.183C1719.34 167.841 1736.6 155.702 1753.57 135.883L1754.38 134.934C1758.26 130.345 1762.63 127.927 1767.35 127.055C1772.09 126.181 1777.23 126.855 1782.66 128.521C1793.54 131.861 1805.41 139.121 1817.32 145.568C1829.17 151.986 1841.07 157.603 1851.87 157.455C1857.29 157.38 1862.44 155.853 1867.15 152.259C1871.72 148.783 1875.85 143.393 1879.44 135.579L1879.79 134.815C1883.79 125.864 1893.96 103.132 1903.12 82.6384C1907.71 72.3914 1912.04 62.7036 1915.23 55.5778C1916.82 52.0152 1918.13 49.0929 1919.04 47.0612C1919.21 46.6852 1919.36 46.3395 1919.5 46.0261V1366.08H0.5V-1.79132Z",
];

let lastWave = null;

const getRandomWave = () => {
  if (wavePaths.length <= 1) return wavePaths[0]; // fallback for 1-item array

  let nextWave;
  do {
    nextWave = wavePaths[Math.floor(Math.random() * wavePaths.length)];
  } while (nextWave === lastWave);

  lastWave = nextWave;
  return nextWave;
};

const colorStack = ref([
  {
    color: props.items[0]?.backgroundColor || "#fff",
    key: 0,
    path: getRandomWave(),
  },
]);

const onSlideChange = (swiper) => {
  nextIndex.value = swiper.activeIndex;
  const nextColor = props.items[swiper.activeIndex]?.backgroundColor || "#fff";

  colorStack.value.push({
    color: nextColor,
    key: Date.now(),
    path: getRandomWave(),
  });

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
            <path :fill="layer.color" :d="layer.path" />
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
      transform: translateY(120%);
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
