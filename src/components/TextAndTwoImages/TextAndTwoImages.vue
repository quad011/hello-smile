<script setup>
import hardCodedItems from "./items";

const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  textBtn: {
    type: String,
  },
  items: {
    type: [Array, Object],
    default: () => hardCodedItems,
  },
});
</script>

<template>
  <div
    class="text-and-two-images flex flex-col relative overflow-hidden px-5 sm:px-20 xl:px-60 pt-20 sm:pt-32 lg:pt-60 pb-10 md:pb-20 lg:pb-40"
  >
    <div class="relative">
      <div>
        <!-- TITLE -->
        <h1
          class="title uppercase flex items-center whitespace-nowrap font-impact text-[23vw] sm:text-[20vw] lg:text-[21.7rem] tracking-[-.04em] leading-none text-[#282930]"
        >
          <!-- <animated-element :fromY="50" :toY="0"> -->
          <span
            v-for="(letter, i) in title"
            :class="{
              'last-letter': i === title.length - 1,
              'second-last-letter': i === title.length - 2,
            }"
            >{{ letter }}</span
          >
        </h1>
        <!-- </animated-element> -->
        <!-- END ::  TITLE -->

        <!-- IMAGES -->
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="`image image--${index}`"
        >
          <scrolling-element
            :fromX="index % 2 ? '30vw' : '-30vw'"
            :toX="0"
            startPosition="0"
            endPosition="center center"
          >
            <img class="w-full h-full" :src="item.image" :alt="'hello smile'" />
          </scrolling-element>
        </div>
        <!-- END :: IMAGES -->
      </div>

      <!-- TEXT -->
      <animated-element :fromY="50" :toY="0" :delay="0.1">
        <p
          class="text-14 lg:text-20 leading-normal text-[#7E8492] mt-10 sm:w-4/5 lg:w-1/2 sm:pr-10"
          v-html="text"
        />
      </animated-element>
      <!-- END ::  TEXT -->

      <!-- BTN -->
      <animated-element :fromY="50" :toY="0" :delay="0.2">
        <arrow-btn :textBtn="textBtn" class="mt-5 lg:mt-10" />
      </animated-element>
      <!-- END ::  BTN -->
    </div>
  </div>
</template>

<style lang="scss">
.text-and-two-images {
  .title {
    span {
      position: relative;
      z-index: 10;
    }
    .second-last-letter {
      position: relative;
      left: 1rem;
      z-index: 4;
      @media (min-width: 600px) {
        left: 3rem;
      }
    }

    .last-letter {
      position: relative;
      z-index: 6;
      left: 1.5rem;
      transform: rotate(-10deg);
      @media (min-width: 600px) {
        left: 4rem;
      }
    }
  }

  .image {
    position: absolute;
    &--0 {
      left: 0;
      top: -12vw;
      width: 30vw;
      height: 21vw;
    }
    &--1 {
      right: 6%;
      top: 16vw;
      width: 14vw;
      height: 13.7vw;
      z-index: 5;
    }
  }
}
</style>
