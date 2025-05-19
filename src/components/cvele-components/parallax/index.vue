<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parallaxContainer = ref(null);
const parallax = ref(null);

onMounted(() => {
  gsap.to(parallax.value, {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: parallaxContainer.value,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
</script>

<template>
  <div
    class="parallax-container relative overflow-hidden w-full h-full"
    ref="parallaxContainer"
  >
    <div
      class="parallax-background absolute left-0 top-0 w-full h-full"
      ref="parallax"
    ></div>
    <div class="parallax-content h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
