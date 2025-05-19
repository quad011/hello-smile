<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import items from "./items";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
});

const swiper = ref(0);
const swiperTwo = ref(0);
const currentIndex = ref(0);

const onSwiper = (swiperSlider) => {
  swiper.value = swiperSlider;
};
const onSwiperTwo = (swiperSlidertwo) => {
  swiperTwo.value = swiperSlidertwo;
};
const next = () => {
  swiper.value.slideNext();
};
const prev = () => {
  swiper.value.slidePrev();
};
const onSlideChange = (index) => {
  currentIndex.value = index.activeIndex;
};
</script>

<template>
  <div class="experience my-10 lg:my-16 relative overflow-hidden">
    <div class="flex items-center justify-between px-4 lg:px-16 mb-5 lg:mb-10">
      <h2 v-html="title" class="text-32 lg:text-40" />
      <div class="flex items-center">
        <div
          @click="prev"
          class="arrow w-[1.5rem] lg:w-[2.5rem] prev cursor-pointer"
        >
          <arrow-top
            class="w-10 lg:w-14 h-10 lg:h-14 p-3 rotate-90 stroke-black"
          />
        </div>

        <div
          @click="next"
          class="arrow w-[1.5rem] lg:w-[2.5rem] next cursor-pointer"
        >
          <arrow-top
            class="w-10 lg:w-14 h-10 lg:h-14 p-3 -rotate-90 stroke-black"
          />
        </div>
      </div>
    </div>

    <Swiper
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      class="swiper-wrapper !h-auto w-full !pl-4 lg:!pl-16"
      :speed="700"
      :grab-cursor="true"
      :delay="0.1"
      :breakpoints="{
        slidesPerView: 2,
        spaceBetween: '10',
        1024: {
          slidesPerView: 2.3,
          spaceBetween: '50',
        },
      }"
    >
      <SwiperSlide
        v-for="(item, index) in items.items"
        :key="index"
        class="flex h-full"
      >
        <TextBox
          :date="item.date"
          :company="item.company"
          :companyLinks="item.companyLinks"
          :ocupation="item.ocupation"
          :text="item.text"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped></style>
