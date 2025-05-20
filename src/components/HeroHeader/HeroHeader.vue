<script setup>
import hardCodedItems from "./items";

const props = defineProps({
  caption: {
    type: String,
  },
  title1: {
    type: String,
  },
  title2: {
    type: String,
  },
  text: {
    type: String,
  },
  bottomGradient: {
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
    class="hero-header h-[70vh] sm:h-[100vw] md:h-[120vh] lg:h-[150vh] flex flex-col relative overflow-hidden bg-[#c4eafe] px-5 sm:px-20 xl:px-60 pt-20 lg:pt-32 lg:pb-92"
  >
    <div class="relative z-10">
      <!-- CAPTION -->
      <animated-element :fromY="-50" :toY="0">
        <p v-html="caption" class="text-right text-12 lg:text-base" />
      </animated-element>
      <!-- END :: CAPTION -->

      <!-- TITLE -->
      <h1 class="uppercase flex flex-col leading-[.9] font-impact">
        <animated-element :fromX="-50" :toX="0" :delay="0.1">
          <span
            v-html="title1"
            class="text-[30.16vw] sm:text-[26.16vw] lg:text-[26.16rem] text-[#7FA2EA] tracking-[-.03em]"
          />
        </animated-element>
        <animated-element
          :fromX="50"
          :toX="0"
          :delay="0.2"
          class="relative z-10 ml-auto"
        >
          <span
            v-html="title2"
            class="text-[15.88vw] lg:text-[15.88rem] text-[#FF4AA7] tracking-[-.03em] text-right"
          />
        </animated-element>
      </h1>
      <!-- END ::  TITLE -->

      <!-- SCORE -->
      <div
        class="text-center mt-10 md:mt-20 flex items-center justify-center ml-10 sm:ml-0"
      >
        <animated-element :fromY="50" :toY="0" :delay="0.2">
          <span
            v-html="'4.9 / 5'"
            class="font-impact lg:text-54 tracking-[-.05em] mr-3"
          />
          * <span v-html="'18,921'" class="lg:text-24 ml-3" />
        </animated-element>
      </div>
      <!-- END :: SCORE -->

      <!-- IMAGES -->
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="`image image--${index}`"
      >
        <animated-element :fromScale="0" :toScale="1" :delay="index * 0.1">
          <scrolling-element
            :fromY="0"
            :toY="index % 2 ? '-10vw' : '10vw'"
            :speed="index * 2"
            startPosition="0"
            endPosition="bottom"
          >
            <img class="w-full h-full" :src="item.image" :alt="'hello smile'" />
            <p
              v-if="index === 2"
              v-html="text"
              class="text-10 md:text-12 lg:text-24 lg:px-5 mt-2 lg:mt-5"
            />
          </scrolling-element>
        </animated-element>
      </div>
      <!-- END :: IMAGES -->
    </div>

    <animated-element
      :fromY="50"
      :toY="0"
      class="absolute left-0 bottom-0 w-full h-auto"
    >
      <img :src="bottomGradient" :alt="'hello smile'" />
    </animated-element>
  </div>
</template>

<style lang="scss" scoped>
.hero-header {
  .image {
    position: absolute;
    &--0 {
      left: 0;
      top: 32vw;
      width: 29vw;
      height: 26vw;
      @media (min-width: 600px) {
        top: 24vw;
      }
    }
    &--1 {
      left: 36%;
      top: 24vw;
      width: 19.16vw;
      height: 19vw;
      @media (min-width: 600px) {
        top: 20vw;
      }
    }
    &--2 {
      right: 0%;
      top: 18vw;
      width: 17.7vw;
      height: 28vw;
      @media (min-width: 600px) {
        right: -15%;
      }
    }
  }
}
</style>
