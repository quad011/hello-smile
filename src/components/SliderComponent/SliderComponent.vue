<script>
import { useSliderLogic } from "./sliderLogic.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Slide from "./Slide.vue";
import hardCodedItems from "./items";

export default {
  name: "YourComponentName",
  components: {
    Swiper,
    SwiperSlide,
    Slide,
  },
  props: {
    items: {
      type: [Array, Object],
      default: () => hardCodedItems,
    },
  },
  emits: ["update:currentIndex"],
  setup(props, { emit }) {
    return useSliderLogic(props, emit);
  },
};
</script>

<template>
  <div class="slider-component">
    <!-- BG COLOR -->
    <div class="clip-wrapper">
      <div class="bg-color-wrapper">
        <div
          v-for="(layer, i) in colorStack"
          :key="layer.key"
          class="liquid-bg"
          :class="{
            'animate-liquid': i === colorStack.length - 1 && !isFirstLoad,
          }"
        >
          <svg
            class="wave-mask"
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
        class="swiper-slide"
      >
        <Slide
          :theme="item.backgroundColor"
          :textColor="item.textColor"
          :isActive="activeIndex === Number(index)"
          :isPrev="activeIndex > Number(index)"
          :isNext="activeIndex < Number(index)"
          :titleTop="item.titleTop"
          :titleBottom="item.titleBottom"
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
  position: relative;
  .clip-wrapper {
    position: absolute;
    z-index: 0;
    overflow: hidden;
    inset: 0;
    // absolute inset-0 z-0 overflow-hidden
    //   clip-path: ellipse(150% 100% at 50% 100%);
    //   @media (min-width: 600px) {
    //     clip-path: ellipse(111% 100% at 50% 100%);
    //   }
  }
  .bg-color-wrapper {
    position: absolute;
    inset: 0;
    .wave-mask {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 100%;
      z-index: 2;
      pointer-events: none;
      top: -28%;
      height: 130%;
    }
    .liquid-bg {
      position: absolute;
      inset: 0;
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

  .swiper {
    height: auto !important;
    .swiper-slide {
      width: 55%;
      padding: 5rem 0;
      @media (min-width: 600px) {
        width: 50%;
      }
      @media (min-width: 992px) {
        padding: 10vw 0 7.8vw 0;
      }
    }
    .swiper-slide-prev {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
