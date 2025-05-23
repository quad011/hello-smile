<script setup>
const props = defineProps({
  textBtn: {
    type: String,
  },
  theme: {
    type: String,
    default: "black",
  },
  arrowIcon: {
    type: Boolean,
  },
});
</script>

<template>
  <div :class="`btn-component flex justify-around items-center ${theme}`">
    <!-- FAKE DIV -->
    <div v-if="arrowIcon" />
    <!-- END :: FAKE DIV -->

    <span v-html="textBtn" class="text-12 lg:text-24" />
    <div v-if="arrowIcon" class="arrow">
      <svg viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.0779 1.47186L26.4666 6.8606M26.4666 6.8606L21.0779 12.2493M26.4666 6.8606L2.21729 6.8606"
          stroke-width="2.69437"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-component {
  border-radius: 50px;
  min-width: 18vw;
  padding: 0.5rem 2rem;
  @media (min-width: 1024px) {
    padding: 1rem 2rem;
  }

  .arrow {
    width: 1.33rem;
    height: auto;
    object-fit: contain;
  }

  &.white {
    background-color: white;
    border: 1px solid #282930;
    color: black;
    .arrow {
      path {
        stroke: black;
      }
    }
    &:hover {
      background-color: black;
      color: white;
      .arrow {
        path {
          stroke: white;
        }
      }
    }
  }

  &.black {
    background-color: black;
    border: 1px solid #282930;
    color: white;
    .arrow {
      path {
        stroke: white;
      }
    }

    &:hover {
      background-color: white;
      color: black;
      .arrow {
        path {
          stroke: black;
        }
      }
    }
  }

  &.pink {
    background-color: #ff4aa7;
    border: 1px solid #ff4aa7;
    color: white;
    .arrow {
      path {
        stroke: white;
      }
    }

    &:hover {
      background-color: white;
      color: ff4aa7;
      .arrow {
        path {
          stroke: ff4aa7;
        }
      }
    }
  }
}
</style>
