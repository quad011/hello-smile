<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray(".image-container").forEach((container) => {
    const image = container.querySelector(".parallax-inner");

    if (!image) {
      console.error("Image element not found in container");
      return;
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(image, { yPercent: -20 }, { yPercent: 20, ease: "none" });
  });
});
</script>

<template>
  <div class="parallax image-container relative w-full h-full">
    <div class="img w-full h-full overflow-hidden">
      <div class="parallax-inner">
        <slot />
      </div>
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
    top: -20%;
    height: 120%;
    width: 100%;
  }
}
</style>
