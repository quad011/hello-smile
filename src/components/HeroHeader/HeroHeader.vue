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
  <div class="hero-header">
    <div class="inner-wrapper">
      <!-- CAPTION -->
      <animated-element :fromY="-50" :toY="0">
        <p v-html="caption" class="caption" />
      </animated-element>
      <!-- END :: CAPTION -->

      <!-- TITLE -->
      <h1>
        <animated-element :fromX="-50" :toX="0" :delay="0.1">
          <span v-html="title1" class="big-title" />
        </animated-element>
        <animated-element
          :fromX="50"
          :toX="0"
          :delay="0.2"
          class="small-title-wrapper"
        >
          <span v-html="title2" class="small-title" />
        </animated-element>
      </h1>
      <!-- END ::  TITLE -->

      <!-- SCORE -->
      <div class="score-wrapper">
        <animated-element
          :fromY="50"
          :toY="0"
          :delay="0.2"
          class="score-wrapper-inner"
        >
          <span v-html="'4.9 / 5'" class="span1" />
          * <span v-html="'18,921'" class="span2" />
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
            <img :src="item.image" :alt="'hello smile'" />
            <p v-if="index === 2" v-html="text" class="image-text" />
          </scrolling-element>
        </animated-element>
      </div>
      <!-- END :: IMAGES -->
    </div>

    <animated-element :fromY="50" :toY="0" class="gradient-wrapper">
      <img :src="bottomGradient" :alt="'hello smile'" />
    </animated-element>
  </div>
</template>

<style lang="scss" scoped>
.hero-header {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: #c4eafe;
  padding: 2.5rem 1.25rem 5rem 1.25rem;
  @media (min-width: 600px) {
    padding: 5rem 5rem 8rem 5rem;
  }
  @media (min-width: 992px) {
    padding: 8rem 15rem 23rem 15rem;
  }
  .inner-wrapper {
    position: relative;
    z-index: 10;
    .caption {
      text-align: right;
      font-size: 0.66rem;
      @media (min-width: 992px) {
        font-size: clamp(14px, 1rem, 22px);
        line-height: 1.2;
      }
    }
    h1 {
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      line-height: 0.9;
      font-family: "Impact";
      .big-title {
        font-size: 30vw;
        color: #7fa2ea;
        letter-spacing: -0.03em;
        @media (min-width: 600px) {
          font-size: 26.16vw;
        }
        @media (min-width: 992px) {
          font-size: 26.16rem;
        }
      }
      .small-title-wrapper {
        position: relative;
        z-index: 10;
        margin-left: auto;
        .small-title {
          font-size: 15.88vw;
          color: #ff4aa7;
          letter-spacing: -0.03em;
          text-align: right;
          @media (min-width: 992px) {
            font-size: 15.88rem;
          }
        }
      }
    }
    .score-wrapper {
      text-align: center;
      margin-top: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1.25rem 0 0 2.5rem;
      @media (min-width: 600px) {
        margin-left: 4rem;
      }
      @media (min-width: 992px) {
        margin-top: 5rem;
      }
      @media (min-width: 1600px) {
        margin-left: 0;
      }
      .score-wrapper-inner {
        display: flex;
        align-items: center;
        .span1 {
          font-family: "Impact";
          font-size: clamp(10px, 0.77rem, 20px);
          line-height: 1.25;
          letter-spacing: -0.05em;
          margin-right: 0.25rem;
          @media (min-width: 768px) {
            margin-right: 0.75rem;
          }
          @media (min-width: 992px) {
            font-size: clamp(44px, 3rem, 60px);
          }
        }
        .span2 {
          font-size: clamp(10px, 0.66rem, 18px);
          margin-left: 0.25rem;
          @media (min-width: 768px) {
            margin-left: 0.75rem;
          }
          @media (min-width: 992px) {
            font-size: clamp(16px, 1.3333rem, 28px);
          }
        }
      }
    }
    .image-text {
      font-size: clamp(10px, 0.55rem, 16px);
      margin-top: 0.5rem;
      line-height: 1.25;
      @media (min-width: 768px) {
        font-size: clamp(10px, 0.66rem, 18px);
      }
      @media (min-width: 992px) {
        font-size: clamp(16px, 1.3333rem, 28px);
        padding: 0 1.25rem 0 1.25rem;
        margin-top: 1.25rem;
      }
    }
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
  .gradient-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
}
</style>
