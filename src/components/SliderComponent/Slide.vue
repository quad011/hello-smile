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
  >
    <div class="relative z-10">
      <div
        :style="{ '--text-color': props.textColor }"
        class="content-wrapper flex flex-col items-center justify-center mx-auto"
      >
        <!-- CAPTION -->
        <div v-html="caption" class="text-14 lg:text-18 mb-0.5" />
        <!-- END :: CAPTION -->

        <!-- TITLE -->
        <h2
          v-html="title"
          class="text-36 md:text-40 lg:text-60 pp mb-2 sm:mb-4 lg:mb-5 pt-1 no-wrap font-Impact whitespace-nowrap"
        />
        <!-- END :: TITLE -->

        <!-- DESCRIPTION -->
        <div
          v-html="description"
          class="text-12 lg:text-24 mx-auto mb-5 lg:mb-1 lg:mb-5 description px-1 sm:px-0"
        />
        <!-- END ::  DESCRIPTION -->
      </div>
    </div>

    <div class="relative">
      <!-- BG IMAGE -->
      <div class="2xl:px-12 bg-image">
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

    <!-- BTN -->
    <div class="flex justify-center mt-12 lg:mt-32">
      <RouterLink to="/">
        <btnComponent theme="white" textBtn="Dodaj u Korpu" class="btn" />
      </RouterLink>
    </div>
    <!-- END :: BTN -->
  </div>
</template>

<style lang="scss" scoped>
.slide {
  .bg-image {
    // margin-top: -6vw;
    position: relative;
    transform: translateX(-22.5vw);
    width: 100vw;
    height: 55vw;
    z-index: 2;

    @media (min-width: 600px) {
      left: 0;
      width: 100%;
      height: 28vw;
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
    height: 17vw;
    width: 7.5vw;
    transition: 1s transform ease-out;

    @media (min-width: 600px) {
      transform: translate(-50%, -15%);
      height: 17vw;
      width: 3.5vw;
    }

    @media (min-width: 1024px) {
      transform: translate(-50%, 10%);
    }
  }

  .content-wrapper {
    color: var(--text-color);
    @media (max-width: 600px) {
      width: 100vw;
      transform: translateX(-22.5vw);
    }
  }

  .content-wrapper {
    transition: 0.4s opacity, 1s transform ease-out;
  }

  .btn {
    transition: opacity 0.4s, transform 1s ease-out, background-color 0.4s ease,
      color 0.4s ease, stroke 1s ease;
  }

  .bg {
    transition: 0.4s opacity, 1s transform ease-out;
    z-index: 2;
  }

  &--active {
    @media (max-width: 600px) {
      .image {
        transform: translate(-50%, 0) scale(1);
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
        transform: translate(25%, 15%) scale(0.7);
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
        transform: translate(-125%, 15%) scale(0.7);
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
