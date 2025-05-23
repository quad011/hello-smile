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
  <div class="image-text-and-cta">
    <div class="content-wrapper-outer">
      <!-- CONTENT -->
      <div class="content-wrapper">
        <animated-element :fromY="50" :toY="0">
          <h2 v-html="title" class="title" />
        </animated-element>

        <div class="content-wrapper-desk">
          <animated-element :fromY="50" :toY="0" :delay="0.1">
            <p v-html="text" class="text" />
          </animated-element>
          <!-- BTN -->
          <div class="btn-wrapper">
            <animated-element :fromY="50" :toY="0" :delay="0.2">
              <RouterLink to="/">
                <btnComponent
                  theme="black"
                  textBtn="Dodaj u Korpu"
                  class="btn"
                />
              </RouterLink>
            </animated-element>
          </div>
          <!-- END :: BTN -->
        </div>
      </div>
      <!-- END :: CONTENT -->

      <!-- IMAGE -->
      <div class="bg-image">
        <parallax :factor="0.2">
          <img :src="bgImage" :alt="'hello smile'" />
        </parallax>
      </div>
      <!-- END :: IMAGE -->
    </div>

    <div class="content-wrapper-mob">
      <p v-html="text" class="text" />

      <!-- BTN -->
      <div class="btn-wrapper">
        <RouterLink to="/">
          <btnComponent theme="pink" textBtn="Dodaj u Korpu" class="btn" />
        </RouterLink>
      </div>
      <!-- END :: BTN -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-text-and-cta {
  .content-wrapper-outer {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vw;
    padding-top: 2.5rem;
    @media (min-width: 600px) {
      height: 60vw;
    }
    @media (min-width: 768px) {
      padding-top: 4rem;
    }
    @media (min-width: 992px) {
      padding-top: 7rem;
      height: 58vw;
    }
  }
  .content-wrapper {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    @media (min-width: 992px) {
      width: 65%;
    }
    .title {
      font-size: 4rem;
      font-family: "Impact";
      letter-spacing: -0.04em;
      line-height: 0.9;
      color: white;
      @media (min-width: 600px) {
        font-size: 10.36vw;
      }
    }
    .content-wrapper-desk {
      display: none;
      @media (min-width: 600px) {
        display: block;
      }
    }
  }
  .text {
    color: black;
    font-size: clamp(10px, 0.77rem, 20px);
    line-height: 1.25;
    padding: 0 0.5rem;
    text-align: center;
    @media (min-width: 600px) {
      padding: 0 1rem;
      margin-top: 1.25rem;
      color: white;
      padding: 0 6rem;
    }
    @media (min-width: 992px) {
      margin-top: 1.75rem;
      font-size: clamp(15px, 1.1111rem, 25px);
      line-height: 1.25;
    }
  }
  .content-wrapper-mob {
    display: block;
    padding: 2rem 0;
    @media (min-width: 600px) {
      display: none;
      padding: 0;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1.25rem;
    @media (min-width: 768px) {
      margin-top: 2.5rem;
    }
    @media (min-width: 992px) {
      margin-top: 3rem;
    }
  }
  .bg-image {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>
