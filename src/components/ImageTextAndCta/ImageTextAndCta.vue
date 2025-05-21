<script setup>
const props = defineProps({
  bgImage: {
    type: [String, Object],
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <div class="image-text-and-cta relative pt-10 md:pt-16 lg:pt-28">
    <!-- CONTENT -->
    <div class="content-wrapper relative z-10">
      <h2 v-html="title" class="title" />

      <p v-html="text" class="text-14 lg:text-20 mt-5 lg:mt-7 px-2 md:px-0" />

      <!-- BTN -->
      <div class="flex justify-center mt-5 md:mt-10 lg:mt-12">
        <RouterLink to="/">
          <btnComponent theme="black" textBtn="Dodaj u Korpu" class="btn" />
        </RouterLink>
      </div>
      <!-- END :: BTN -->
    </div>
    <!-- END :: CONTENT -->

    <!-- IMAGE -->
    <div class="bg-image overflow-hidden">
      <parallax :factor="0.2">
        <img class="w-full h-full" :src="bgImage" :alt="'hello smile'" />
      </parallax>
    </div>
  </div>
  <!-- END :: IMAGES -->
</template>

<style lang="scss" scoped>
.image-text-and-cta {
  display: flex;
  justify-content: center;
  color: white;
  height: 85vw;
  @media (min-width: 600px) {
    height: 60vw;
  }
  @media (min-width: 992px) {
    height: 58vw;
  }
  .content-wrapper {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
      width: 65%;
    }
    .title {
      font-size: 10.36vw;
      font-family: "Impact";
      letter-spacing: -0.04em;
      line-height: 0.9;
    }
    p {
      padding: 0 1rem;
      @media (min-width: 600px) {
        padding: 0 6rem;
      }
    }
  }
  .bg-image {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
