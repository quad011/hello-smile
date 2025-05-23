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
  <div class="text-and-two-images">
    <div class="inner-wrapper">
      <div>
        <!-- TITLE -->
        <h1 class="title">
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
            <img :src="item.image" :alt="'hello smile'" />
          </scrolling-element>
        </div>
        <!-- END :: IMAGES -->
      </div>

      <!-- TEXT -->
      <animated-element :fromY="50" :toY="0" :delay="0.1">
        <p class="text" v-html="text" />
      </animated-element>
      <!-- END ::  TEXT -->

      <!-- BTN -->
      <animated-element :fromY="50" :toY="0" :delay="0.2" class="btn-wrapper">
        <arrow-btn :textBtn="textBtn" />
      </animated-element>
      <!-- END ::  BTN -->
    </div>
  </div>
</template>

<style lang="scss">
.text-and-two-images {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 600px) {
    padding: 8rem 5rem;
  }

  @media (min-width: 768px) {
    padding-bottom: 5rem;
  }

  @media (min-width: 992px) {
    padding-top: 15rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 1024px) {
    padding: 15rem 15rem 10rem 15rem;
  }
  .inner-wrapper {
    position: relative;
    .title {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      white-space: nowrap;
      font-family: "Impact";
      font-size: 23vw;
      letter-spacing: -0.04em;
      line-height: 1;
      color: #282930;
      span {
        position: relative;
        z-index: 10;
        @media (min-width: 600px) {
          font-size: 20vw;
        }
        @media (min-width: 992px) {
          font-size: 21.7rem;
        }
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

    .text {
      font-size: clamp(10px, 0.77rem, 20px);
      line-height: 1.25;
      color: #7e8492;
      margin-top: 2.5rem;
      @media (min-width: 600px) {
        width: 65%;
      }
      @media (min-width: 992px) {
        font-size: clamp(15px, 1.1111rem, 25px);
      }
      @media (min-width: 1200px) {
        padding-right: 2.5rem;
        width: 50%;
      }
    }

    .btn-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 1.25rem;
      @media (min-width: 600px) {
        justify-content: start;
      }
      @media (min-width: 992px) {
        margin-top: 2.5rem;
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
}
</style>
