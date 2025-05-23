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
    :class="[`slide--${isActive ? 'active' : isNext ? 'next' : 'prev'}`]"
    class="slide"
    :style="{ '--text-color': props.textColor }"
  >
    <div class="content-wrapper-outer">
      <div class="content-wrapper">
        <!-- CAPTION -->
        <div v-html="caption" class="caption" />
        <!-- END :: CAPTION -->

        <!-- TITLE TOP -->
        <h2 v-html="titleTop" class="title" />
        <!-- END :: TITLE TOP -->
      </div>
    </div>

    <div class="content-wrapper-bottom">
      <!-- BG IMAGE -->
      <div class="bg-image">
        <img class="bg" :src="backgroundImage" :alt="'hello smile'" />
      </div>
      <!-- END :: BG IMAGE -->

      <!-- IMAGE -->
      <div class="image">
        <img :src="image" :alt="'hello smile'" />
      </div>
      <!-- END :: IMAGE -->

      <div class="content-wrapper">
        <!-- TITLE BOTTOM -->
        <h2 v-html="titleBottom" class="title" />
        <!-- END :: TITLE BOTTOM -->

        <!-- DESCRIPTION -->
        <div v-html="description" class="description" />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  color: var(--text-color);
  .bg-image {
    margin-top: -4vw;
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
      margin-top: -3vw;
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
    position: absolute;
    z-index: 11;
    left: 50%;
    top: 50%;
    z-index: 11;
    height: 51vw;
    width: 10.5vw;
    transition: 1s transform ease-out;
    img {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 600px) {
      // transform: translate(-50%, -70%);
      // height: 33vw;
      // width: 6.5vw;
      transform: translate(-50%, -60%);
      height: 22vw;
      width: 4.5vw;
    }

    @media (min-width: 1024px) {
      transform: translate(-50%, -45%);
    }

    @media (min-width: 1500px) {
      transform: translate(-50%, -50%);
      width: 7vw;
    }
  }

  .description {
    width: 100vw;
    transform: translateX(-22.5vw);
    font-size: clamp(10px, 0.77rem, 20px);
    line-height: 1.25;
    margin: 0 auto;
    padding: 0 0.25rem;
    margin-top: 1.25rem;
    @media (min-width: 600px) {
      transform: translateX(0);
      width: 50vw;
      padding: 0;
    }
    @media (min-width: 992px) {
      font-size: clamp(15px, 1rem, 20px);
    }
    @media (min-width: 1440px) {
      width: 35vw;
    }
  }

  .content-wrapper-outer {
    position: relative;
    z-index: 10;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: 0.4s opacity, 1s transform ease-out;
    .caption {
      font-family: HelveticaNeue-Extended;
      line-height: 1.25;
      font-size: clamp(10px, 0.77rem, 20px);
      margin-bottom: 0.5rem;
      @media (min-width: 600px) {
        line-height: 1.1;
        margin-bottom: 0.125rem;
      }
      @media (min-width: 992px) {
        font-size: clamp(30px, 2rem, 36px);
      }
    }
  }

  .content-wrapper-bottom {
    position: relative;
    .content-wrapper {
      margin-top: -3vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media (min-width: 600px) {
        margin-top: -2.8vw;
      }
    }
  }

  .title {
    line-height: 0.9;
    white-space: no-wrap;
    letter-spacing: -0.03em;
    font-family: "HelveticaNeue-Heavy";
    font-size: 15.28vw;
    @media (min-width: 600px) {
      font-size: 13.28vw;
    }
  }

  .bg {
    display: flex;
    aspect-ratio: 2;
    transition: 0.4s opacity, 1s transform ease-out;
    z-index: 2;
    height: 100%;
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
        transform: translate(0, -45%) scale(0.7);
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
        transform: translate(-100%, -45%) scale(0.7);
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
