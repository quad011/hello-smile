<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  wrapped: {
    type: Boolean,
    default: false,
  },
  factor: {
    type: Number,
    default: 0.3,
  },
  innerClass: {
    type: String,
    default: "w-full h-full",
  },
});

const containerRef = ref(null);
const innerRef = ref(null);

onMounted(() => {
  if (!innerRef.value || !containerRef.value) return;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    .fromTo(
      innerRef.value,
      { yPercent: -100 * props.factor },
      { yPercent: 100 * props.factor, ease: "none" }
    );
});
</script>

<template>
  <div
    ref="containerRef"
    class="parallax image-container relative w-full h-full overflow-hidden"
  >
    <div
      ref="innerRef"
      class="parallax-inner w-full h-full will-change-transform"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.parallax {
  .img {
    position: relative;
  }

  .parallax-inner {
    position: relative;
    height: 120%;
    width: 100%;
    @media (max-width: 1200px) {
      top: -20%;
    }
  }
}
</style>
