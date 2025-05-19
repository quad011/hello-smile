<script setup>
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
  },
});
</script>

<template>
  <button
    role="button"
    aria-label="button"
    class="hamburger pr-0 min-w-0 inline-block border-0 m-0 focus:outline-none overflow-visible"
    type="button"
    :class="{
      'hamburger--is-active': isMenuOpen,
    }"
  >
    <span
      class="hamburger-box w-[1.166rem] h-[.6rem] relative block cursor-pointer focus:outline-none"
    >
      <span class="line line--1"></span>

      <span class="line line--2"></span>

      <span class="line line--3"></span>
    </span>
  </button>
</template>

<style lang="scss" scoped="">
.hamburger {
  .hamburger-box {
    .line {
      @apply absolute left-0 block w-full h-[2px] origin-center transition-all duration-500 bg-white;
      &--1 {
        @apply top-0;
      }

      &--2 {
        @apply top-2/4;
        transform: translate3d(0, -60%, 0);
      }

      &--3 {
        @apply bottom-0;
      }
    }
  }

  &--is-active {
    .hamburger-box {
      .line--1 {
        @apply w-full top-2/4;
        transform: translate3d(0, -50%, 0) rotate(45deg) translateZ(0);
      }

      .line--2 {
        @apply opacity-0;
      }

      .line--3 {
        @apply w-full bottom-2/4;
        transform: translate3d(0, 50%, 0) rotate(-45deg) translateZ(0);
      }
    }
  }
}
</style>
