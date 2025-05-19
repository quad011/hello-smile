<script setup>
const props = defineProps({
  title: { type: String },
  caption: { type: String },
  description: { type: String },
  headline: { type: String },
  backgroundImage: { type: String },
  image: { type: String },
  text: { type: String },
  theme: { type: String },
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
        // 'z-4': isPrev // Uncomment if needed
      },
      'flex flex-col justify-center',
    ]"
    class="slide text-center mx-auto"
  >
    <div class="relative z-10">
      <div class="content-wrapper flex flex-col items-center">
        <!-- CAPTION -->
        <div v-html="caption" class="text-14 lg:text-18 mb-0.5" />
        <!-- END :: CAPTION -->

        <!-- TITLE -->
        <h3
          v-html="title"
          class="text-40 lg:text-60 pp mb-2 sm:mb-4 lg:mb-5 pt-1 no-wrap"
        />
        <!-- END :: TITLE -->

        <!-- DESCRIPTION -->
        <div
          v-html="description"
          class="text-14 lg:text-18 mx-auto mb-5 lg:mb-1 lg:mb-5 description px-1 sm:px-0"
        />
        <!-- END ::  DESCRIPTION -->
      </div>
    </div>

    <!-- BG IMAGE -->
    <div class="xl:px-12 bg-image">
      <img
        class="bg w-full h-full object-cover flex aspect-[2]"
        :src="backgroundImage"
        :alt="'hello smile'"
      />
    </div>
    <!-- END :: BG IMAGE -->

    <!-- IMAGE -->
    <div class="image absolute">
      <div class="w-100 h-100">
        <img :src="image" :alt="'hello smile'" class="w-100 h-100" />
      </div>
    </div>
    <!-- END :: IMAGE -->
  </div>
</template>

<style lang="scss" scoped>
.slide {
  .bg-image {
    // margin-top: -6vw;
    position: relative;
    // transform: translateX(-22.5vw);
    width: 100vw;

    @media (min-width: 600px) {
      left: -6%;
      width: 111.5%;
      transform: translateX(0);
      //   margin-top: -4.5vw;
    }

    @media (min-width: 992px) {
      left: 0;
      width: 100%;
    }
  }

  .image {
    left: 50%;
    top: 50%;
    z-index: 3;
    height: auto;
    width: 7.25rem;
    transition: 1s transform ease-out;

    @media (min-width: 922px) {
      transform: translate(-50%, 34%);
      //   width: 8.25rem;
      width: 13.13rem;
    }

    @media (min-width: 1024px) {
      transform: translate(-50%, 10%);
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
    .image {
      transform: translate(-50%, 0%) scale(1);
    }

    .bg,
    .content-wrapper {
      transition-delay: 0.2s;
    }
  }

  &--prev {
    @media (max-width: 375px) {
      .image {
        transform: translate(-55%, 10%) scale(0.5);
      }
    }

    .bg {
      transform: translateX(-25vw);
      opacity: 0;
    }
    .content-wrapper {
      transform: translateX(-15vw);
      opacity: 0;
    }
  }

  &--next {
    @media (max-width: 375px) {
      .image {
        transform: translate(-45%, 14%) scale(0.5);
      }
    }

    .bg {
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
