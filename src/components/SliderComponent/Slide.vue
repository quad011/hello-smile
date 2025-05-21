<script setup>
const props = defineProps({
  titleTop: { type: String },
  titleBottom: { type: String },
  caption: { type: String },
  description: { type: String },
  backgroundImage: { type: String },
  image: { type: String },
  text: { type: String },
  theme: { type: String },
  textColor: { type: String, default: "#000" },
  isActive: { type: Boolean },
  isNext: { type: Boolean },
  isPrev: { type: Boolean },
});
</script>

<template>
  <div
    :class="[
      `slide--${isActive ? 'active' : isNext ? 'next' : 'prev'}`,
      {
        // 'z-10 relative': isPrev, // Uncomment if needed
      },
      'flex flex-col justify-center',
    ]"
    class="slide text-center mx-auto"
    :style="{ '--text-color': props.textColor }"
  >
    <div class="relative z-10">
      <div
        class="content-wrapper flex flex-col items-center justify-center mx-auto"
      >
        <!-- CAPTION -->
        <div
          v-html="caption"
          class="text-14 lg:text-36 mb-0.5 font-helveticaMedium"
        />
        <!-- END :: CAPTION -->

        <!-- TITLE TOP -->
        <h2
          v-html="titleTop"
          class="text-[15.28vw] sm:text-[13.28vw] leading-[.9] pp mb-2 sm:mb-4 lg:mb-5 pt-1 no-wrap tracking-[-.03em] whitespace-nowrap font-helveticaBlack"
        />
        <!-- END :: TITLE TOP -->
      </div>
    </div>

    <div class="relative">
      <!-- BG IMAGE -->
      <div class="bg-image">
        <img
          class="bg w-full h-full object-cover flex aspect-[2]"
          :src="backgroundImage"
          :alt="'hello smile'"
        />
      </div>
      <!-- END :: BG IMAGE -->

      <!-- IMAGE -->
      <div class="image absolute z-[11]">
        <div class="w-100 h-100">
          <img :src="image" :alt="'hello smile'" class="w-100 h-100" />
        </div>
      </div>
      <!-- END :: IMAGE -->

      <div
        class="-mt-[5vw] sm:-mt-[2.8vw] content-wrapper flex flex-col justify-center items-center"
      >
        <!-- TITLE BOTTOM -->
        <h2
          v-html="titleBottom"
          class="text-[15.28vw] sm:text-[13.28vw] leading-[.9] no-wrap tracking-[-.03em] whitespace-nowrap font-helveticaBlack"
        />
        <!-- END :: TITLE BOTTOM -->

        <!-- DESCRIPTION -->
        <div
          v-html="description"
          class="text-12 lg:text-18 mx-auto font-medium description px-1 sm:px-0 mt-5"
        />
        <!-- END ::  DESCRIPTION -->
      </div>
    </div>

    <!-- BTN -->
    <!-- <div class="flex justify-center mt-12 lg:mt-32">
      <RouterLink to="/">
        <btnComponent theme="white" textBtn="Dodaj u Korpu" class="btn" />
      </RouterLink>
    </div> -->
    <!-- END :: BTN -->
  </div>
</template>

<style lang="scss" scoped>
.slide {
  color: var(--text-color);
  .bg-image {
    margin-top: -7vw;
    position: relative;
    transform: translateX(-22.5vw);
    width: 100vw;
    height: 55vw;
    z-index: 10;

    @media (min-width: 600px) {
      transform: translateX(0);
      left: 0;
      width: 100%;
      height: 22.7vw;
      margin-top: -4vw;
    }

    @media (min-width: 768px) {
      transform: translateX(-4vw);
      left: 0;
      width: 116.8%;
    }

    @media (min-width: 1500px) {
      height: 26.7vw;
    }
  }

  .image {
    left: 50%;
    top: 50%;
    z-index: 11;
    height: 51vw;
    width: 10.5vw;
    transition: 1s transform ease-out;

    @media (min-width: 600px) {
      transform: translate(-50%, -70%);
      height: 33vw;
      width: 6.5vw;
    }

    @media (min-width: 1024px) {
      transform: translate(-50%, -60%);
    }
    @media (min-width: 1500px) {
      width: 7vw;
    }
  }

  .description {
    width: 100vw;
    transform: translateX(-22.5vw);
    @media (min-width: 600px) {
      transform: translateX(0);
      width: 50vw;
    }
    @media (min-width: 1440px) {
      width: 35vw;
    }
  }

  .content-wrapper {
    transition: 0.4s opacity, 1s transform ease-out;
  }

  .bg {
    transition: 0.4s opacity, 1s transform ease-out;
    z-index: 2;
  }

  &--active {
    @media (max-width: 600px) {
      .image {
        transform: translate(-50%, -60%) scale(1);
      }
    }

    .bg,
    .content-wrapper {
      transition-delay: 0.2s;
    }
  }

  &--prev {
    position: relative;
    z-index: 1;
    @media (max-width: 600px) {
      .image {
        transform: translate(0, -46%) scale(0.7);
      }
    }

    .bg,
    .btn {
      transform: translateX(-25vw);
      opacity: 0;
    }
    .content-wrapper {
      transform: translateX(-15vw);
      opacity: 0;
    }
  }

  &--next {
    @media (max-width: 600px) {
      .image {
        transform: translate(-100%, -46%) scale(0.7);
      }
    }

    .bg,
    .btn {
      transform: translateX(25vw);
      opacity: 0;
    }

    .content-wrapper {
      transform: translateX(15vw);
      opacity: 0;
    }
  }
}
</style>
